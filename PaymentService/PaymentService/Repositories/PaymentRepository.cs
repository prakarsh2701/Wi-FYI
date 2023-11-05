using MongoDB.Driver;
using PaymentService.Models;

namespace PaymentService.Repositories
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly PaymentContext context;
        public PaymentRepository(PaymentContext context)
        {
            this.context = context;
        }
        public void AddOrder(OrderModel request)
        {
            context.order.InsertOne(request);

        }
        public OrderModel GetOrder(String orderId)
        {

            OrderModel or = context.order.Find(o => o.razorpay_order_id == orderId).FirstOrDefault();
            return or;
        }
        public List<OrderModel> GetOrdersByUserId(string userId)
        {
            return context.order.Find(o => o.payerEmail == userId).ToList();
        }
        public void AddPayment(PaymentModel pay)
        {
            context.payment.InsertOne(pay);
        }
        public PaymentModel GetPaymentbyPaymentId(string payId)
        {
            return context.payment.Find(p => p.razorpay_payment_id == payId).FirstOrDefault();
        }
        public PaymentModel GetPaymentByOrderId(string orderId)
        {
            return context.payment.Find(p => p.razorpay_order_id == orderId).FirstOrDefault();
        }
        public PaymentModel GetPaymentBySignature(string signature)
        {
            return context.payment.Find(p => p.razorpay_signature == signature).FirstOrDefault();
        }
        public void UpdateOrder(OrderModel o, PaymentModel pay)
        {
                var filter = Builders<OrderModel>.Filter.Eq(od => od.razorpay_order_id, o.razorpay_order_id);
                var update = Builders<OrderModel>.Update
                    .Set(od => od.razorpay_payment_id, pay.razorpay_payment_id)
                    .Set(od => od.razorpay_signature, pay.razorpay_signature);

                var updateResult = context.order.UpdateOne(filter, update);
        }
    }
}
