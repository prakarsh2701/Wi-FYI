using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RatingService.Repository;
using RatingService.Models;

namespace RatingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly IRatingRepository repo;
        public RatingController(IRatingRepository repo)
        {
            this.repo = repo;   
        }



        [HttpPost]
        public IActionResult addrating(Rating rating)
        {
            repo.AddRating(rating);
            return Ok("rating added successfully");
        }


        [HttpGet("getbyuserandpackage")]
        public IActionResult getbyuser(string bookingId)
        {
            return Ok(repo.GetRatingByBookingId(bookingId));
        }



        [HttpGet("getbypackage")]
        public IActionResult getbypackage(int packageId)
        {
            return Ok(repo.GetRatingOnPackage(packageId));
        }



        [HttpGet("average")]
        public IActionResult getavgrating(int packageId)
        {
            return Ok(repo.AverageRating(packageId));
        }
    }
}
