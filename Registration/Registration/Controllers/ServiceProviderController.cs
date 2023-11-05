using Confluent.Kafka;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Registration.Models;
using Registration.Service;

namespace Registration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceProviderController : ControllerBase
    {
        private readonly IServiceProviderService svc;
        private readonly IConfiguration config;
        public ServiceProviderController(IServiceProviderService svc, IConfiguration config)
        {
            this.svc = svc;
            this.config = config;
        }
        [HttpPost]
        public async Task<IActionResult> Post(ServiceProviderRegistration providerobj)
        {
            svc.AddProvider(providerobj);
           // return StatusCode(201, "user Added");
            string message = JsonConvert.SerializeObject(providerobj);
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
        [HttpGet("GetAllServiceProviders")]
        public IActionResult list()
        {
            return Ok(svc.GetProvider());
        }

        [HttpGet("GetProviderByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var obj = svc.GetProviderByEmail(email);
            return Ok(obj);
        }

        [HttpPut("UpdateProvider")]
        public IActionResult update(ServiceProviderRegistration providerobj)
        {
            svc.UpdateProvider(providerobj);
            return Ok(new
            {
                Status = 200,
                Message = "User Added!"
            });
        }
    }
}
