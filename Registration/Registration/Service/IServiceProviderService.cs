using Registration.Models;

namespace Registration.Service
{
    public interface IServiceProviderService
    {
        List<ServiceProviderRegistration> GetProvider();
        void AddProvider(ServiceProviderRegistration provider);
        void UpdateProvider(ServiceProviderRegistration provider);
        ServiceProviderRegistration GetProviderByEmail(String email);
    }
}
