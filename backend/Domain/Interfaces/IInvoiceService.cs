
using FinanceApp.Entities;

namespace FinanceApp.Domain.Interfaces
public interface IInvoiceService
{
    Task<IEnumberable<Invoice>> getAllAsync();
    Task<Invoice?>
}