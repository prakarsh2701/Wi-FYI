using Microsoft.OpenApi.Any;
using MongoDB.Bson.Serialization.Attributes;

namespace PackageService.Models
{
    public class Package
    {
        [BsonId]
        public int PackageId { get; set; }
        public string PackageName { get; set; }
        public string CompanyName { get; set; }
        public int Speed { get; set; }
        public int Price { get; set; }
        public int Duration { get; set; }
        public int InstallationFee { get; set; }
        public string Description { get; set; }
        public Subscription? Subscriptions { get; set; }
    }
    
}
