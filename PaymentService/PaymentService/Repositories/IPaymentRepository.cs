using MongoDB.Driver;
using PaymentService.Models;

namespace PaymentService.Repositories
{
    public interface IPaymentRepository 
    {
        public void AddOrder(OrderModel request);
        public OrderModel GetOrder(String orderId);
        public List<OrderModel> GetOrdersByUserId(string userId);
        public void AddPayment(PaymentModel pay);
        public PaymentModel GetPaymentbyPaymentId(string payId);
        public PaymentModel GetPaymentByOrderId(string orderId);
        public PaymentModel GetPaymentBySignature(string signature);
        public void UpdateOrder(OrderModel o, PaymentModel pay);

    }
}
