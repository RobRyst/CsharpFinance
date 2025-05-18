
using FinanceApp.Entities;

namespace FinanceApp.Application.Interfaces
public interface IInvoiceService
{
    Task<IEnumberable<Invoice>> getAllAsync();
    Task<Invoice?>
}