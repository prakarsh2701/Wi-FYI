namespace PackageService.Exceptions
{
    public class PackageIdExistsException:Exception
    {
        public PackageIdExistsException()
        {
            
        }
        public PackageIdExistsException(string message):base(message) 
        {
            
        }
    }
}
