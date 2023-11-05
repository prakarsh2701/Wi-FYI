using Registration.Models;

namespace Registration.Repository
{
    public interface IUserRepository
    {
        List<UserRegistration> GetUser();
        UserRegistration GetUserByEmail(String email);
        void AddUser(UserRegistration user);
        void UpdateUser(UserRegistration user);
    }
}
