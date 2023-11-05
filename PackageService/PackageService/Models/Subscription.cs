using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PackageService.Models
{
    public class Subscription
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public String SubscriptionName { get; set; }
       
       
        //public int SubscriptionID { get; set; }
    }
}
