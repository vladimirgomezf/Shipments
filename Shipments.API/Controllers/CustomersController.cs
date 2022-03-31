using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shipments.API.Models;
using Shipments.API.Data;

namespace Shipments.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : Controller
    {
        private readonly DataContext _context;

        public CustomersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Customers>>> Get()
        {
            return Ok(await _context.Customers.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customers>> Get(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return BadRequest("Customer Not found!");
            }
            return Ok(customer);
        }

        [HttpPost]
        public async Task<ActionResult<List<Customers>>> AddCustomer([FromBody] Customers customer)
        {
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return Ok(_context.Customers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Customers>>> UpdateCustomer(Customers request)
        {
            var dbCustomer = await _context.Customers.FindAsync(request.Id);
            if (dbCustomer == null)
                return BadRequest("Customer not found!");

            dbCustomer.Name = request.Name;
            dbCustomer.Cellphone = request.Cellphone;
            dbCustomer.Address = request.Address;
            dbCustomer.Email = request.Email;

            await _context.SaveChangesAsync();

            return Ok(await _context.Customers.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Customers>>> DeleteCustomer(int id)
        {
            var dbCustomer = await _context.Customers.FindAsync(id);
            if (dbCustomer == null)
                return BadRequest("Customer not found!");

            _context.Customers.Remove(dbCustomer);
            await _context.SaveChangesAsync();

            return Ok(await _context.Customers.ToListAsync());
        }
    }
}