using MongoDB.Bson.Serialization.Attributes;
namespace BookingService.Models
{
    public class Booking
    {
        [BsonId]
        public string bookingId { get; set; }
        public string paymentId { get; set; }
        public User user { get; set; }
        public Package pack { get; set; }
        public DateTime InstallationDate { get; set; }
    }
}
