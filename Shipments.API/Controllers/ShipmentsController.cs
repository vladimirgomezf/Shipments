using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shipments.API.Models;
using Shipments.API.Data;

namespace Shipments.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipmentsController : Controller
    {
        private readonly DataContext _context;

        public ShipmentsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Shipments.API.Models.Shipments>>> Get()
        {
            return Ok(await _context.Shipments.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Shipments.API.Models.Shipments>> Get(int id)
        {
            var ships = await _context.Shipments.FindAsync(id);
            if (ships == null)
            {
                return BadRequest("Shipment Not found!");
            }
            return Ok(ships);
        }

        [HttpPost]
        public async Task<ActionResult<List<Shipments.API.Models.Shipments>>> AddOrder([FromBody] Shipments.API.Models.Shipments shipment)
        {
            _context.Shipments.Add(shipment);
            await _context.SaveChangesAsync();

            return Ok(_context.Shipments.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Shipments.API.Models.Shipments>>> UpdateOrder(Shipments.API.Models.Shipments request)
        {
            var dbShips = await _context.Shipments.FindAsync(request.Id);
            if (dbShips == null)
                return BadRequest("Shipment not found!");

            dbShips.Order_Id = request.Order_Id;
            dbShips.Date_Start = request.Date_Start;
            dbShips.Date_End = request.Date_End;

            await _context.SaveChangesAsync();

            return Ok(await _context.Shipments.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Shipments.API.Models.Shipments>>> DeleteOrder(int id)
        {
            var dbShips = await _context.Shipments.FindAsync(id);
            if (dbShips == null)
                return BadRequest("Shipment not found!");

            _context.Shipments.Remove(dbShips);
            await _context.SaveChangesAsync();

            return Ok(await _context.Shipments.ToListAsync());
        }
    }
}