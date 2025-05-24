using backend.Domain.Entities;
using backend.Domain.Interfaces;
using backend.Dtos;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceService _invoiceService;

        private readonly PdfService _pdfService;

        public InvoiceController(IInvoiceService invoiceService, PdfService pdfService)
        {
            _invoiceService = invoiceService;
            _pdfService = pdfService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice>>> GetAll()
        {
            var invoices = await _invoiceService.GetAllAsync();
            return Ok(invoices);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> GetById(int id)
        {
            var invoice = await _invoiceService.GetByIdAsync(id);
            if (invoice == null) return NotFound();
            return Ok(invoice);
        }

        [HttpGet("with-user")]
        public async Task<ActionResult<IEnumerable<InvoiceDto>>> GetAllInvoiceWithUser()
        {
            var invoices = await _invoiceService.GetAllWithUserAsync();
            return Ok(invoices);
        }

        [HttpGet("download-pdf/{id}")]
        public IActionResult DownloadInvoicePDF(int id)
        {
            var pdfBytes = _pdfService.GenerateInvoicePDF();
            return File(pdfBytes, "application/pdf", "InvoiceList.pdf");
        }


        [HttpPost]
        public async Task<ActionResult<Invoice>> Create(Invoice invoice)
        {
            var created = await _invoiceService.CreateAsync(invoice);
            return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Invoice>> Update(int id, Invoice invoice)
        {
            var updated = await _invoiceService.UpdateAsync(id, invoice);
            if (updated == null) return NotFound();
            return Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _invoiceService.DeleteAsync(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}
