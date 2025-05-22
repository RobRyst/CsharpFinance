using System.Reflection;
using backend.Domain.Entities;
using backend.Domain.Interfaces;
using backend.Dtos;
using backend.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Application.Services
{
    public class InvoiceService : IInvoiceService
    {
        private readonly ApplicationDbContext _context;

        public InvoiceService(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<InvoiceDto>> GetAllWithUserAsync()
    {
        return await _context.Invoices
            .Include(i => i.User)
            .Select(i => new InvoiceDto
            {
                Id = i.Id,
                Status = i.Status,
                Sub_total = i.Sub_total,
                Discount = i.Discount,
                Total = i.Total,
                InvoiceCreated = i.InvoiceCreated,
                InvoiceDueDate = i.InvoiceDueDate,
                UserId = i.UserId,
                FirstName = i.User != null ? i.User.FirstName : "",
                LastName = i.User != null ? i.User.LastName : ""
            })
            .ToListAsync();
    }

        public async Task<IEnumerable<Invoice>> GetAllAsync()
        {
            return await _context.Invoices.ToListAsync();
        }

        public async Task<Invoice> GetByIdAsync(int id)
        {
            return await _context.Invoices.FindAsync(id);
        }

        public async Task<Invoice> CreateAsync(Invoice invoice)
        {
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();
            return invoice;
        }

        public async Task<Invoice> UpdateAsync(int id, Invoice invoice)
        {
            var existingInvoice = await _context.Invoices.FindAsync(id);
            if (existingInvoice == null)
            {
                return null!;
            }
            existingInvoice.InvoiceDueDate = invoice.InvoiceDueDate;

            await _context.SaveChangesAsync();
            return existingInvoice;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var invoice = await _context.Invoices.FindAsync(id);
            if (invoice == null)
            {
                return false;
            }

            _context.Invoices.Remove(invoice);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
