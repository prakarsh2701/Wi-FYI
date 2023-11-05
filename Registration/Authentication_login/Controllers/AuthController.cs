using Authentication_login.Models;
using Authentication_login.Repository;
using Authentication_login.Services;
using Confluent.Kafka;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Authentication_login.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILoginRepository repo;
        private readonly ITokenGenerator tg;
        public AuthController(ILoginRepository repo, ITokenGenerator tg)
        {
            this.repo = repo;
            this.tg = tg;
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Logins([FromBody] Login login)
        {

            var res = repo.Login(login);
            if (res != null)
            {
                var token = tg.GenerateToken(res.Email, res.role);
                return Ok(new
                {
                    Status = 200,
                    message = "Login Successful",
                    Token = token
                });
            }
            else
            {
                return StatusCode(401, "Invalid Credentials");
            }

        }

        [HttpGet]
        public IActionResult getuser(string email) {
            var obj = repo.GetUserByEmail(email);
            return Ok(obj);
        }
    }

}
