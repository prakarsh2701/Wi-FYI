using MongoDB.Driver;
using Registration.Models;

namespace Registration.Repository
{
    public class ServiceProviderRepository : IServiceProviderRepository
    {
        private readonly DataContext context;
        public ServiceProviderRepository(DataContext context)
        {
            this.context = context;
        }
        public void AddProvider(ServiceProviderRegistration provider)
        {
            context.Providers.InsertOne(provider);
        }

        public List<ServiceProviderRegistration> GetProvider()
        {
            return context.Providers.Find(t => true).ToList();
        }

        public void UpdateProvider(ServiceProviderRegistration provider)
        {
            var filter = Builders<ServiceProviderRegistration>.Filter.Where(t => t.Email == provider.Email);
            var update = Builders<ServiceProviderRegistration>.Update.Set(t => t.ContactPersonName, provider.ContactPersonName)
                .Set(t => t.OfficeAddress, provider.OfficeAddress)
                .Set(t => t.PhoneNumber, provider.PhoneNumber)
                .Set(t => t.CompanyName, provider.CompanyName)
                .Set(t=>t.GstNumber,provider.GstNumber);


            context.Providers.UpdateOne(filter, update);
        }
        public ServiceProviderRegistration GetProviderByEmail(String email)
        {

            return context.Providers.Find(t => t.Email == email).FirstOrDefault();
        }
    }
}
