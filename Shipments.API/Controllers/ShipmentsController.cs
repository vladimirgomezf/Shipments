#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shipments.API.Data;
using Shipments.API.Models;

namespace Shipments.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipmentsController : ControllerBase
    {
        private readonly DataContext _context;

        public ShipmentsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shipments.API.Models.Shipments>>> GetShipments()
        {
            return await _context.Shipments.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Shipments.API.Models.Shipments>> GetShipments(int id)
        {
            var shipments = await _context.Shipments.FindAsync(id);

            if (shipments == null)
            {
                return NotFound();
            }

            return shipments;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutShipments(int id, Shipments.API.Models.Shipments shipments)
        {
            if (id != shipments.Id)
            {
                return BadRequest();
            }

            _context.Entry(shipments).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShipmentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Shipments.API.Models.Shipments>> PostShipments(Shipments.API.Models.Shipments shipments)
        {
            _context.Shipments.Add(shipments);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShipments", new { id = shipments.Id }, shipments);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShipments(int id)
        {
            var shipments = await _context.Shipments.FindAsync(id);
            if (shipments == null)
            {
                return NotFound();
            }

            _context.Shipments.Remove(shipments);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShipmentsExists(int id)
        {
            return _context.Shipments.Any(e => e.Id == id);
        }
    }
}
