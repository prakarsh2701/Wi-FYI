using MongoDB.Bson.Serialization.Attributes;

namespace BookingService.Models
{
    public class User
    {
        [BsonId]
        public String UserID { get; set; }
        public String UserFirstName { get; set; }
        public String UserLastName { get; set; }
        public String Email { get; set; }
        public String UserPassword { get; set; }
        public String PhoneNumber { get; set; }
    }
}
