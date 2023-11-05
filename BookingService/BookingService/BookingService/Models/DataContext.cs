using MongoDB.Driver;

namespace BookingService.Models
{
    public class DataContext
    {
        MongoClient client;
        IMongoDatabase database;
        public DataContext(IConfiguration config)
        {
            client = new MongoClient(config.GetConnectionString("MyCon"));
            database= client.GetDatabase(config.GetSection("DatabaseName").Value);
        }
        public IMongoCollection<Booking> bookings => database.GetCollection<Booking>("bookings");
        public IMongoCollection<User> users => database.GetCollection<User>("users");
        public IMongoCollection<Package> packages => database.GetCollection<Package>("packages");


    }
}
