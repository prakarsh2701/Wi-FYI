using MongoDB.Driver;

namespace Authentication_login.Models
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
        public IMongoCollection<Login> log => database.GetCollection<Login>("loginmongo");
    }
}
