using PackageService.Models;

namespace PackageService.Services
{
    public interface IPackageService
    {
        List<Package> GetPackage();
        Package GetPackageById(int id);
        void CreatePackage(Package package);
        void UpdatePackage(Package package);
        void DeletePackage(int id);
        public List<Package> GetPackageByCompany(string cname);
    }
}
