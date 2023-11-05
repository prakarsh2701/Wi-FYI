using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Registration.Models
{
    public class UserRegistration
    {
       // [BsonId]
     //   public int UserID { get; set; }
        public String? UserFirstName { get; set; }
        public String ?UserLastName { get; set; }
        [BsonId]
        public String? Email { get; set;}
        public String? Password { get; set;}
        public String? PhoneNumber { get; set;}
        public String? Address { get; set;}
        public String? Role = "User";
    
    }
}
