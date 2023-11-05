namespace Authentication_login.Services
{
    public interface ITokenGenerator
    {
        string GenerateToken(string email,string role);
    }
}
