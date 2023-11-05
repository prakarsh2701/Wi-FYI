using MongoDB.Driver;
using Registration.Models;

namespace Registration.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext context;
        public UserRepository(DataContext context)
        {
            this.context = context;
        }
        public void AddUser(UserRegistration user)
        {
            context.Users.InsertOne(user);
        }

        public List<UserRegistration> GetUser()
        {
            return context.Users.Find(t => true).ToList();
        }

        public void UpdateUser(UserRegistration user)
        {
            var filter = Builders<UserRegistration>.Filter.Where(t => t.Email == user.Email);
            var update = Builders<UserRegistration>.Update.Set(t => t.UserFirstName, user.UserFirstName)
                .Set(t => t.UserLastName, user.UserLastName)
                .Set(t => t.PhoneNumber, user.PhoneNumber)
                .Set(t => t.Address, user.Address);

            context.Users.UpdateOne(filter, update);
        }
        public UserRegistration GetUserByEmail(String email)
        {

            return context.Users.Find(t => t.Email == email).FirstOrDefault();
        }
    }
}
