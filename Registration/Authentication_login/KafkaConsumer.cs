using Confluent.Kafka;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Authentication_login.Models;
using static Authentication_login.Models.Login;
using static Authentication_login.Models.roless;
using System.Threading.Tasks;
namespace Authentication_login
{
    public class KafkaConsumer : IHostedService
    {
        private readonly IConsumer<Ignore, string> consumer;
        private Task ConsumerTask;
        private CancellationTokenSource canceltoken;
        private readonly DataContext context;
        public KafkaConsumer(DataContext context)
        {

            this.context = context;

            ConsumerConfig cconfig = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = "test_group",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };
            consumer = new ConsumerBuilder<Ignore, string>(cconfig).Build();
            consumer.Subscribe("login");
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
                    var userData = JsonConvert.DeserializeObject<Login>(consumeresult.Message.Value);
                    var userDataToAdd = new Login
                        {
                            Email = userData.Email,
                            Password = userData.Password,
                            role = userData.role
                        };
                    consumer.Commit(consumeresult);
                    context.log.InsertOne(userDataToAdd);

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
