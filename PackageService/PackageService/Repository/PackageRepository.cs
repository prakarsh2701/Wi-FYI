using MongoDB.Driver;
using MongoDbCRUD.Models;
using PackageService.Models;

namespace PackageService.Repository
{
    public class PackageRepository : IPackageRepository
    {
        private readonly PackageDbContext Dbcon;
        public PackageRepository(PackageDbContext Dbcon) 
        {  this.Dbcon = Dbcon;
        }
        public void CreatePackage(Package package)
        {
            Dbcon.packages.InsertOne(package);
        }

        public void DeletePackage(int id)
        {
            Dbcon.packages.DeleteOne(p=>p.PackageId==id);
        }

        public Package GetPackageById(int id)
        {
            return Dbcon.packages.Find(o => o.PackageId == id).FirstOrDefault();
        }

        public List<Package> GetPackage()
        {
            return Dbcon.packages.Find(t => true).ToList();
        }
        public List<Package> GetPackagebyCompanyName(string name)
        {
            return Dbcon.packages.Find(p => p.CompanyName == name).ToList();
        }

        public void UpdatePackage(Package package)
        {
            var filter = Builders<Package>.Filter.Where(o => o.PackageId == package.PackageId);
            var update = Builders<Package>.Update
                .Set(p => p.PackageName, package.PackageName)
                .Set(p => p.Price, package.Price)
                .Set(p => p.Duration, package.Duration)
                .Set(p => p.InstallationFee, package.InstallationFee)
                .Set(p => p.Description, package.Description)
                .Set(p => p.Speed, package.Speed);

            Dbcon.packages.UpdateOne(filter, update);
        }
    }
}
