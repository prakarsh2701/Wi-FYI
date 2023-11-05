using Confluent.Kafka;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Registration.Models;
using Registration.Repository;
using Registration.Service;

namespace Registration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService svc;
        private readonly IConfiguration config;
        public UserController(IUserService svc, IConfiguration config)
        {
            this.svc = svc;
            this.config = config;
        }
        //[HttpPost]
        //public IActionResult create([FromBody] UserRegistration userobj)
        //{

        //    svc.AddUser(userobj);
        //    return StatusCode(201, "user Added");


        //}
        [HttpGet("GetAllUsers")]
        public IActionResult list()
        {
            return Ok(svc.GetUser());
        }

        [HttpGet("GetUserById")]
        public IActionResult GetByEmail(string email)
        {
            var obj = svc.GetUserByEmail(email);
            return Ok(obj);
        }

        [HttpPut("UpdateUser")]
        public IActionResult update( [FromBody] UserRegistration userobj)
        {
                svc.UpdateUser(userobj);
                return Ok(new
                {
                    Status = 200,
                    Message = "User Added!"
                });
        }
        [HttpPost("CreateUser")]
        public async Task<IActionResult> Post([FromBody]UserRegistration userobj)
        {
            svc.AddUser(userobj);
            string message = JsonConvert.SerializeObject(userobj);
            ProducerConfig pconfig = new ProducerConfig
            {
                BootstrapServers = config["Kafka:Server"]
            };

            using (var producer = new ProducerBuilder<Null, string>(pconfig).Build())
            {
                //Write ur msg into topic
                var result = await producer.ProduceAsync("login", new Message<Null, string>
                {
                    Value = message
                });
                //return Ok(result);
                return await Task.FromResult(Ok(new
                {
                    Status = 200,
                    Message = "User Added!"
                }));


            }
        }
    }

}
