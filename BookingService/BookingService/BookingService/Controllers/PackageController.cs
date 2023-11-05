using BookingService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace BookingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly DataContext context;
        public PackageController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult getpackages()
        {
            var packages = context.packages.Find(b => true).ToList();
            return Ok(packages);
        }
    }
}
