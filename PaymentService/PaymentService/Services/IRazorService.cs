using PaymentService.Models;
using Razorpay.Api;

namespace PaymentService.Services
{
    public interface IRazorService
    {
        public Order CreateOrder(string apiKey, string apiSecret, OrderModel o);
        public void VerifyPayment(string apiKey, string apiSecret, PaymentModel p);
    }
}
