using System.ComponentModel.DataAnnotations;

namespace Shipments.API.Models
{
    public class Customers
    {
        public int Id { get; set; }
        [StringLength(50)]
        public string Name { get; set; } = String.Empty;
        [StringLength(15)]
        public string Cellphone { get; set; } = String.Empty;
        [StringLength(50)]
        public string Address { get; set; } = String.Empty;
        [StringLength(20)]
        public string Email { get; set; } = String.Empty;
    }
}
