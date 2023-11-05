namespace Registration.Exceptions
{
    public class AlredyExistsException:Exception
    {
        public AlredyExistsException()
        {

        }
        public AlredyExistsException(string message) : base(message)
        {

        }
    }
}
