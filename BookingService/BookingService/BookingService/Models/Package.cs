using MongoDB.Bson.Serialization.Attributes;

namespace BookingService.Models
{
    public class Package
    {
        [BsonId]
        public int PackageId { get; set; }
        public string PackageName { get; set; }
        public int Speed { get; set; }
        public int Price { get; set; }
        public int Duration { get; set; }
        public int InstallationFee { get; set; }
    }
}
