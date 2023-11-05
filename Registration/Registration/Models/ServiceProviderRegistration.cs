using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace Registration.Models
{
    public class ServiceProviderRegistration
    {
        //[BsonId]
        //public int ProviderId { get; set; }
        public String? CompanyName { get; set;}
        public String? ContactPersonName { get; set;}
        [BsonId]
        public String Email { get; set;}
        public String? PhoneNumber { get; set; }
        public String? OfficeAddress { get; set;}
        public String? Password { get; set; }
        public String? GstNumber { get; set; }
      
        public String? Role = "Provider";
    }
}
