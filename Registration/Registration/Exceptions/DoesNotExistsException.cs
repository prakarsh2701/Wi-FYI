﻿namespace Registration.Exceptions
{
    public class DoesNotExistsException:Exception
    {
        public DoesNotExistsException()
        {

        }
        public DoesNotExistsException(string message) : base(message)
        {

        }
    }
}
