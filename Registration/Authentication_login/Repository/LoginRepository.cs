using Authentication_login.Models;
using Confluent.Kafka;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Newtonsoft.Json;

namespace Authentication_login.Repository
{
    public class LoginRepository : ILoginRepository
    {
        private readonly DataContext dbcontext;
        public LoginRepository(DataContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }
        public Login Login(Login login)
        {
          return dbcontext.log.Find(u => u.Email == login.Email && u.Password == login.Password).FirstOrDefault();

        }
        public Login GetUserByEmail(String email)
        {
            return dbcontext.log.Find(t => t.Email == email).FirstOrDefault();
        }
    }
}
