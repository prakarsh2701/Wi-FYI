using BookingService.Models;
using BookingService.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository repo;
        public BookingController(IBookingRepository repo)
        {
            this.repo = repo;
        }
        [HttpPost("CreateBooking")]
        public IActionResult create([FromBody]Booking booking)
        {
            repo.AddBooking(booking);
            return Ok(booking);
        }
        [HttpGet("GetBookingByUserId")]
        public IActionResult getBookingsByUserId(string id)
        {
            return Ok(repo.GetBookingByUserId(id));
        }
        [HttpGet("GetBookingByPackageId")]
        public IActionResult getBookingsByPackageId(int id)
        {
            return Ok(repo.GetBookingByPackageId(id));
        }
        [HttpGet("GetAllBookings")]
        public IActionResult getallBookings()
        {
            return Ok(repo.GetAllBookings());
        }
        [HttpGet("GetBookingById")]
        public IActionResult getBookingById(string id)
        {
            return Ok(repo.GetBookingById(id));
        }
    }
}
