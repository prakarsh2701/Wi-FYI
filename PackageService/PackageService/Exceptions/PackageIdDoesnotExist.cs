namespace PackageService.Exceptions
{
    public class PackageIdDoesnotExistException:Exception
    {
        public PackageIdDoesnotExistException()
        {
            
        }
        public PackageIdDoesnotExistException(string message):base(message) 
        {
            
        }
    }
}
