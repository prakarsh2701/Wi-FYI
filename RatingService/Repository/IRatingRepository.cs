using RatingService.Models;

namespace RatingService.Repository
{
    public interface IRatingRepository
    {
        Rating GetRatingByBookingId(string bookingId);
        List<Rating> GetRatingOnPackage(int packageId);
        void AddRating(Rating rating);
        double AverageRating(int packageId);

    }
}
