using MongoDB.Driver;

namespace Registration.Models
{
    public class DataContext
    {
        MongoClient client;
        IMongoDatabase database;
        public DataContext(IConfiguration config)
        {
            client = new MongoClient(config.GetConnectionString("MyMongodbCon"));
            database = client.GetDatabase(config.GetSection("DatabaseName").Value);
        }
        public IMongoCollection<UserRegistration> Users => database.GetCollection<UserRegistration>("UserRegistrations");
        public IMongoCollection<ServiceProviderRegistration> Providers => database.GetCollection<ServiceProviderRegistration>("ProviderRegistrations");

    }
}
