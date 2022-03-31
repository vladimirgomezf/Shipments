using Microsoft.EntityFrameworkCore;
using Shipments.API.Models;

namespace Shipments.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Customers> Customers { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<Shipments.API.Models.Shipments> Shipments { get; set; }
    }
}
