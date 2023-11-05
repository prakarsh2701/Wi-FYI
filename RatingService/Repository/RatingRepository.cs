using MongoDB.Driver;
using RatingService.Models;
using System.Linq;

namespace RatingService.Repository
{
    public class RatingRepository : IRatingRepository
    {
        private readonly DataContext context;
        public RatingRepository(DataContext context)
        {
            this.context = context;
        }

        public void AddRating(Rating rating)
        {
            Rating r = GetRatingByBookingId(rating.bookingId);
            if (r == null)
            {
                context.ratings.InsertOne(rating);
            }
            else
            {
                UpdateRating(rating);
            }
            
        }

        public List<Rating> GetRatingOnPackage(int packageId)
        {
            return context.ratings.Find(r=>r.PackageId==packageId).ToList();
        }

        public Rating GetRatingByBookingId(string bookingId)
        {
            return context.ratings.Find(r => r.bookingId == bookingId).FirstOrDefault();
        }
        public double AverageRating(int packageId)
        {
            var packageRatings = GetRatingOnPackage(packageId);

            if (packageRatings.Count > 0)
            {
                double totalRating = packageRatings.Sum(r => r.UserRating);
                return totalRating / packageRatings.Count;
            }
            else
            {
                return 0.0;
            }
        }

        public void UpdateRating(Rating rating)
        {
            var filter = Builders<Rating>.Filter.Eq(ra => ra.bookingId, rating.bookingId);
            var update = Builders<Rating>.Update
                .Set(od => od.UserRating, rating.UserRating);

            var updateResult = context.ratings.UpdateOne(filter, update);
        }
    }
}
