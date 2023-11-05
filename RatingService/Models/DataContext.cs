using MongoDB.Driver;

namespace RatingService.Models
{
    public class DataContext
    {
        MongoClient client;
        IMongoDatabase database;
        public DataContext(IConfiguration config)
        {
            client = new MongoClient(config.GetConnectionString("MyCon"));
            database = client.GetDatabase(config.GetSection("DatabaseName").Value);
        }
        public IMongoCollection<Rating> ratings => database.GetCollection<Rating>("ratings");


    }
}
