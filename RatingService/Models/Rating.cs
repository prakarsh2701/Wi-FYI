using MongoDB.Bson.Serialization.Attributes;

namespace RatingService.Models
{
    public class Rating
    {
        [BsonId]
        public string bookingId { get; set; }
        public string UserId { get; set; }
        public int PackageId { get; set; }
        public int UserRating { get; set; }
    }
}
