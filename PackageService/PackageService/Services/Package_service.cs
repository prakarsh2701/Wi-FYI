using PackageService.Exceptions;
using PackageService.Models;
using PackageService.Repository;


namespace PackageService.Services
{
    public class Package_service : IPackageService
    {
        private readonly IPackageRepository repo;
        public Package_service(IPackageRepository repo)
        {
            this.repo = repo;
        }
        public void CreatePackage(Package package)
        {
            Package pack = repo.GetPackageById(package.PackageId);
            if (pack == null)
            {
                repo.CreatePackage(package);
            }
             else
            {
                throw new PackageIdExistsException($"package with this id :{package.PackageId} already exists");
            }

            //throw new NotImplementedException();
        }

        public void DeletePackage(int id)
        {
            var res = repo.GetPackageById(id);
            if (res == null)
            {
                throw new PackageIdDoesnotExistException($"Package with id {id} does not exist");
            }
            else 
            {
                repo.DeletePackage(id);
            }
            
        }

        public List<Package> GetPackage()
        {
            return repo.GetPackage();
               // throw new NotImplementedException();
        }

        public Package GetPackageById(int id)
        {
            var res = repo.GetPackageById(id);
            if (res == null)
            {
                throw new PackageIdDoesnotExistException($"Customer with id {id} does not exist");
            }
            else
            {
                return repo.GetPackageById(id);
            }
        }


        public List<Package> GetPackageByCompany(string cname)
        {
            var res = repo.GetPackagebyCompanyName(cname);
            if (res == null)
            {
                throw new PackageIdDoesnotExistException($"Customer with id {cname} does not exist");
            }
            else
            {
                return res;
            }
        }

        public void UpdatePackage(Package package)
        {
            var res = repo.GetPackageById(package.PackageId);
            if (res == null)
            {
                throw new PackageIdDoesnotExistException($"Customer with Id {package.PackageId} does not exist");
            }
            else
            {
                repo.UpdatePackage(package);

            }
        }
    }
}
