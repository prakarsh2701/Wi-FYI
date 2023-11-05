using BookingService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace BookingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext context;
        public UserController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult getusers()
        {
            var users = context.users.Find(b => true).ToList();
            return Ok(users);
        }
    }
}
