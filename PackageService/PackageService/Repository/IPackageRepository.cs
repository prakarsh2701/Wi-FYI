using PackageService.Models;

namespace PackageService.Repository
{
    public interface IPackageRepository
    {
        public List<Package> GetPackage();
        public List<Package> GetPackagebyCompanyName(string name);
        Package GetPackageById(int id);
        void CreatePackage(Package package);
        void UpdatePackage(Package package);
        void DeletePackage(int id);

    }
}
