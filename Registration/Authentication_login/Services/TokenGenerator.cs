using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Authentication_login.Services
{
    public class TokenGenerator : ITokenGenerator

    {
        public string GenerateToken(string email, string role)
        {
            var claims = new[] { new Claim(ClaimTypes.Email, email), new Claim(ClaimTypes.Role, role) };


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is my custom Secret key for authentication"));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


            var token = new JwtSecurityToken(
                issuer: "authapi",
                audience: "Custapi",
                claims: claims,
                signingCredentials: credentials,
                expires: DateTime.Now.AddMinutes(20)
                );

            var response = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };

            return JsonConvert.SerializeObject(response);



        }

    }
}
