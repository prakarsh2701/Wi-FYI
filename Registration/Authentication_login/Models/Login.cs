using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using static Authentication_login.Models.roless;

namespace Authentication_login.Models
{
   
    public class Login
    {

        
        [BsonId]
        public String Email { get; set; }
        public String Password { get; set; }
        public String? role { get; set; }
        //public enum Role
        //{
        //    User,
        //    Provider
        //}

    }
}
