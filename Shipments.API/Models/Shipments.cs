namespace Shipments.API.Models
{
    public class Shipments
    {
        public int Id { get; set; }
        public Orders? Order_Id { get; set; }
        public DateTime Date_Start { get; set; }
        public DateTime Date_End { get; set; }
    }
}
