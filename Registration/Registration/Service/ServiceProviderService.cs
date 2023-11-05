using Registration.Exceptions;
using Registration.Models;
using Registration.Repository;

namespace Registration.Service
{
    public class ServiceProviderService : IServiceProviderService
    {
        private readonly IServiceProviderRepository repo;
        public ServiceProviderService(IServiceProviderRepository repo)
        {
            this.repo = repo;
        }
        public void AddProvider(ServiceProviderRegistration provider)
        {
            var res = repo.GetProviderByEmail(provider.Email);
            if (res != null)
            {
                throw new AlredyExistsException($"Provider with id {provider.Email} already exists");
            }
            else
            {
                repo.AddProvider(provider);
            }
        }

        public List<ServiceProviderRegistration> GetProvider()
        {
            return repo.GetProvider();
        }

        public void UpdateProvider(ServiceProviderRegistration provider)
        {
            var res = repo.GetProviderByEmail(provider.Email);
            //Console.WriteLine(res);
            if (res != null)
            {
                repo.UpdateProvider(provider);
            }
            else
            {
                throw new DoesNotExistsException($"Provider with id {provider.Email} does not exists");

            }
        }

        public ServiceProviderRegistration GetProviderByEmail(string email)
        {
            return repo.GetProviderByEmail(email);
        }
    }
}
