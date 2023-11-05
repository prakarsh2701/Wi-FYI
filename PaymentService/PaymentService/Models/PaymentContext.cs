using MongoDB.Driver;

namespace PaymentService.Models
{
    public class PaymentContext
    {
        private readonly IMongoDatabase _database;
        public PaymentContext(IConfiguration config)
        {
            MongoClient client;
            IMongoDatabase database;
            client = new MongoClient(config.GetConnectionString("ConnectionString"));
           _database = client.GetDatabase(config.GetSection("DatabaseName").Value);
        }

        public IMongoCollection<OrderModel> order => _database.GetCollection<OrderModel>("Orders");
        public IMongoCollection<PaymentModel> payment => _database.GetCollection<PaymentModel>("Payments");

    }
}

