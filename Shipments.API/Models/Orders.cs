namespace Shipments.API.Models
{
    public class Orders
    {
        public int Id { get; set; }
        public Customers? Customer_Id { get; set; }
        public DateTime Date { get; set; }
    }
}
