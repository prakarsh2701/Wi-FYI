using Registration.Models;

namespace Registration.Repository
{
    public interface IServiceProviderRepository
    {
        List<ServiceProviderRegistration> GetProvider();
        ServiceProviderRegistration GetProviderByEmail(String email);
        void AddProvider(ServiceProviderRegistration provider);
        void UpdateProvider(ServiceProviderRegistration provider);
    }
}
