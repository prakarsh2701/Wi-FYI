using Confluent.Kafka;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PackageService.Models;
using System.Text.Json.Serialization;

namespace ProducerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KafkaController : ControllerBase
    {
        private readonly IConfiguration config;
        public KafkaController(IConfiguration config)
        {
            this.config = config;
        }
        //[HttpPost]
        //public async Task<IActionResult> Post(Package order)
        //{
        //    svc.CreatePackage(packobj);
        //    string message = JsonConvert.SerializeObject(order);

            
        //    ProducerConfig pconfig = new ProducerConfig
        //    {
        //        BootstrapServers = config["Kafka:Server"]


        //    };

        //    using (var producer = new ProducerBuilder<Null, string>(pconfig).Build())
        //    {
            
        //        var result = await producer.ProduceAsync("test", new Message<Null, string>
        //        {
        //            Value = message
        //        });
        //        //return Ok(result);
        //        return await Task.FromResult(Ok("Message Sent"));


        //    }

        //}
    }
}
