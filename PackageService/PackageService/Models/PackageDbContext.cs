using MongoDB.Driver;
using PackageService.Models;

namespace MongoDbCRUD.Models
{
    public class PackageDbContext
    {
        MongoClient client;
        IMongoDatabase database;
        public PackageDbContext(IConfiguration config)
        {
            client = new MongoClient(config.GetConnectionString("MyMongodbCon"));
            database = client.GetDatabase(config.GetSection("DatabaseName").Value);
        }
        public IMongoCollection<Package> packages => database.GetCollection<Package>("packages");
    }
}
