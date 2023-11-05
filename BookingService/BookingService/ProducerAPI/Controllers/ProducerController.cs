using Confluent.Kafka;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProducerAPI.Models;

namespace ProducerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProducerController : ControllerBase
    {
        private readonly IConfiguration config;
        public ProducerController(IConfiguration config)
        {
            this.config = config;
        }
        [HttpPost]
        [Route("api/users")]
        public async Task<IActionResult> PostUser(User user)
        {

            string message = JsonConvert.SerializeObject(user);


            ProducerConfig pconfig = new ProducerConfig
            {
                BootstrapServers = config["Kafka:Server"]


            };

            using (var producer = new ProducerBuilder<Null, string>(pconfig).Build())
            {
                var result = await producer.ProduceAsync("test", new Message<Null, string>
                {
                    Value = message
                });
                return Ok(result);



            }

        }
        [HttpPost]
        [Route("api/package")]
        public async Task<IActionResult> PostPackage(Package package)
        {

            string message = JsonConvert.SerializeObject(package);


            ProducerConfig pconfig = new ProducerConfig
            {
                BootstrapServers = config["Kafka:Server"]


            };

            using (var producer = new ProducerBuilder<Null, string>(pconfig).Build())
            {
                var result = await producer.ProduceAsync("package", new Message<Null, string>
                {
                    Value = message
                });
                return Ok(result);



            }

        }


    }
}
