using BookingService.Models;
using Confluent.Kafka;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace BookingService
{
    public class KafkaConsumerUser : IHostedService
    {
        private readonly IConsumer<Ignore, string> consumer;
        private Task ConsumerTask;
        private CancellationTokenSource canceltoken;
        private readonly DataContext context;
        public KafkaConsumerUser(DataContext context)
        {

            this.context = context;

            ConsumerConfig cconfig = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = "test_group",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };
            consumer = new ConsumerBuilder<Ignore, string>(cconfig).Build();
            consumer.Subscribe("test");
            canceltoken = new CancellationTokenSource();
        }
        public Task StartAsync(CancellationToken cancellationToken)
        {
            ConsumerTask = Task.Factory.StartNew(() => StartConsuming(), TaskCreationOptions.LongRunning);
            return Task.CompletedTask;
        }


        public async Task StopAsync(CancellationToken cancellationToken)
        {
            canceltoken.Cancel();
            if (ConsumerTask != null)
            {
                await Task.WhenAny(ConsumerTask, Task.Delay(TimeSpan.FromSeconds(5)));
            }

            consumer.Close();
            consumer.Dispose();
        }
        private void StartConsuming()
        {
            while (!canceltoken.Token.IsCancellationRequested)
            {
                try
                {
                    var consumeresult = consumer.Consume(canceltoken.Token);
                    var userData = JsonConvert.DeserializeObject<User>(consumeresult.Message.Value);
                    consumer.Commit(consumeresult);
                    context.users.InsertOne(userData);

                }
                catch (ConsumeException ex)
                {

                }

            }
        }

        public void Dispose()
        {
            StopAsync(CancellationToken.None).Wait();
        }
    }
}

