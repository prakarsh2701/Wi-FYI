using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Newtonsoft.Json;
using PaymentService.Models;
using PaymentService.Services;
using Razorpay.Api;
using System;
using System.Collections.Generic;

namespace PaymentService.Controllers
{
    [Route("api/payment")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class PaymentController : ControllerBase
    {
        private string apiKey;
        private string apiSecret;
        private IRazorService svc;
        public PaymentController(IConfiguration iConfig,IRazorService svc)
        {
            apiKey = iConfig["apiKey"];
            apiSecret = iConfig["apiSecret"];
            this.svc = svc;
        }

        [HttpPost("initiate")]
        public IActionResult PaymentStarted([FromBody] OrderModel order)
        {
            try
            {
                Order o = svc.CreateOrder(apiKey, apiSecret, order);
                var json = JsonConvert.SerializeObject(o);
                return Ok(json);
            }
            catch (Exception ex)
            {
              throw new Exception(ex.Message);
            }
        }

        [HttpPost("verification")]
        public IActionResult PaymentComplete([FromBody] PaymentModel pay)
        {
            try
            {
                svc.VerifyPayment(apiKey, apiSecret, pay);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
