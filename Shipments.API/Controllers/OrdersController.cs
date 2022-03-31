using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shipments.API.Models;
using Shipments.API.Data;

namespace Shipments.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
        private readonly DataContext _context;

        public OrdersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Orders>>> Get()
        {
            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Orders>> Get(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
            {
                return BadRequest("Order Not found!");
            }
            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<List<Orders>>> AddOrder([FromBody] Orders order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(_context.Orders.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Orders>>> UpdateOrder(Orders request)
        {
            var dbOrder = await _context.Orders.FindAsync(request.Id);
            if (dbOrder == null)
                return BadRequest("Order not found!");

            dbOrder.Customer_Id = request.Customer_Id;
            dbOrder.Date = request.Date;

            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Orders>>> DeleteOrder(int id)
        {
            var dbOrder = await _context.Orders.FindAsync(id);
            if (dbOrder == null)
                return BadRequest("Order not found!");

            _context.Orders.Remove(dbOrder);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }
    }
}