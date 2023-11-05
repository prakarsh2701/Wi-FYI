using BookingService.Models;

namespace BookingService
{
    public class KafkaConsumerFactory
    {
        private readonly IServiceProvider _serviceProvider;

        public KafkaConsumerFactory(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public KafkaConsumerUser CreateUser()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                return new KafkaConsumerUser(dbContext);
            }
        }
        public KafkaConsumerPackage CreatePackage()
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<DataContext>();
                return new KafkaConsumerPackage(dbContext);
            }
        }

    }
}
