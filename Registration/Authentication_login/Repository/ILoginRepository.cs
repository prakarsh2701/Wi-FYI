using Authentication_login.Models;

namespace Authentication_login.Repository
{
    public interface ILoginRepository
    {
        Login Login(Login login);

        Login GetUserByEmail(String email);
    }
}
