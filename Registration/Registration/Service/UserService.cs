using Registration.Exceptions;
using Registration.Models;
using Registration.Repository;

namespace Registration.Service
{
    public class UserService : IUserService
    {
        private readonly IUserRepository repo;
        public UserService(IUserRepository repo)
        {
            this.repo = repo;
        }
        public void AddUser(UserRegistration user)
        {
            var res = repo.GetUserByEmail(user.Email);
            if (res != null)
            {
                throw new AlredyExistsException($"User with id {user.Email} already exists");
            }
            else
            {
                repo.AddUser(user);
            }
        }

        public List<UserRegistration> GetUser()
        {
            return repo.GetUser();
        }

        public void UpdateUser(UserRegistration user)
        {
            var res = repo.GetUserByEmail(user.Email);
            Console.WriteLine(res);
            if (res != null)
            {
                repo.UpdateUser(user);
            }
            else
            {
                throw new DoesNotExistsException($"User with id {user.Email} does not exists");

            }
        }

        public UserRegistration GetUserByEmail(string email)
        {
            return repo.GetUserByEmail(email);
        }

    }
}
