using MongoDB.Driver;
using System.Linq;
using BookingService.Models;

namespace BookingService.Repository
{
    public class BookingRepository : IBookingRepository
    {
        private DataContext context;
        public BookingRepository(DataContext context)
        {
            this.context = context;
        }

        public void AddBooking(Booking booking)
        {
            context.bookings.InsertOne(booking);
        }

        public List<Booking> GetAllBookings()
        {
            return context.bookings.Find(b=>true).ToList();
        }

        public List<Booking> GetBookingByUserId(string id)
        {
            return context.bookings.Find(b => b.user.UserID.ToString() == id).ToList();
        }
        public List<Booking> GetBookingByPackageId(int id)
        {
            return context.bookings.Find(b => b.pack.PackageId == id).ToList();
        }
        public Booking GetBookingById(string id)
        {
            return context.bookings.Find(b => b.bookingId == id).FirstOrDefault();
        }

    }
}
