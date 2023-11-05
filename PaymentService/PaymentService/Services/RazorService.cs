using Amazon.Runtime.Internal;
using Amazon.Runtime.Internal.Transform;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using PaymentService.Models;
using PaymentService.Repositories;
using Razorpay.Api;

namespace PaymentService.Services
{
    public class RazorService : IRazorService
    {

        private IPaymentRepository repo;

        public RazorService(IPaymentRepository repo)
        {
            this.repo = repo;
        }

        public Order CreateOrder(string apiKey, string apiSecret, OrderModel o)
        {
            RazorpayClient client = new RazorpayClient(apiKey, apiSecret);
            Dictionary<string, object> options = new Dictionary<string, object>();
            options.Add("amount", o.amount);
            options.Add("receipt", o.orderId);
            options.Add("currency", "INR");
            Order order = client.Order.Create(options);
            if (order != null)
            {
                o.razorpay_order_id = order.Attributes.id;
                repo.AddOrder(o);
                return order;
            }
            else
            {
                throw new Exception("Bad Gateway");
            }
        }



        public void VerifyPayment(string apiKey, string apiSecret, PaymentModel p)
        {
            RazorpayClient client = new RazorpayClient(apiKey,apiSecret);
            Dictionary<string, string> attributes = new Dictionary<string, string>();

            attributes.Add("razorpay_payment_id", p.razorpay_payment_id);
            attributes.Add("razorpay_order_id", p.razorpay_order_id);
            attributes.Add("razorpay_signature", p.razorpay_signature);
            Utils.verifyPaymentSignature(attributes);
            OrderModel o = repo.GetOrder(p.razorpay_order_id);
            repo.UpdateOrder(o,p);
        }
    }
}
