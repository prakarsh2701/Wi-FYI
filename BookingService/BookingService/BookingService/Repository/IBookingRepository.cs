using BookingService.Models;

namespace BookingService.Repository
{
    public interface IBookingRepository
    {
        List<Booking> GetAllBookings();
        void AddBooking(Booking booking);
        public List<Booking> GetBookingByUserId(string id);
        public List<Booking> GetBookingByPackageId(int id);
        public Booking GetBookingById(string id);
    }
}
