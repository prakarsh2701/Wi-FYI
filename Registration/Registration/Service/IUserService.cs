using Registration.Models;

namespace Registration.Service
{
    public interface IUserService
    {
        List<UserRegistration> GetUser();
        void AddUser(UserRegistration user);
        void UpdateUser(UserRegistration user);
        UserRegistration GetUserByEmail(String email);
    }
}
