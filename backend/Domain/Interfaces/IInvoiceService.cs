
using FinanceApp.Domain.Entities;

namespace FinanceApp.Domain.Interfaces
public interface IInvoiceService
{
    Task<IEnumberable<Invoice>> getAllAsync();
    Task<Invoice> GetByIdAsync(int id);
    Task<Invoice> CreateAsync(Invoice invoice)

    Task<Invoice> UpdateAsync(int id, Invoice invoice)
    Task<bool> DeleteAsync(int id)

}