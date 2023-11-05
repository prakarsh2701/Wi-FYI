
using MongoDB.Bson.Serialization.Attributes;

namespace PaymentService.Models
{
    public class OrderModel
    {
        public int amount { get; set; }
        public string orderId { get; set; }
        public string userId { get; set; }
        public int packageId { get; set; }
        public string  payerName { get; set; }
        public string payerEmail { get; set; }
        public string payerPhone { get; set; }
        public DateTime dateTimeOfPurchase { get; set; } = DateTime.Now;
        public DateTime bookingDate { get; set; }
        public string razorpay_payment_id { get; set; }
        [BsonId]
        public string razorpay_order_id { get; set; }
        public string razorpay_signature { get; set; }


    }
}
