using Authentication_login.Models;

namespace Authentication_login
{
    public class KafkaConsumerFactory
    {
        private readonly IServiceProvider _serviceProvider;
        public KafkaConsumerFactory(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }
        public KafkaConsumer Create()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var connt = scope.ServiceProvider.GetRequiredService<DataContext>();
                return new KafkaConsumer(connt);
            }
        }

    }
}
