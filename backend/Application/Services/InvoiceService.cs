public class InvoiceService : IInvoiceService
{
    private readonly ApplicationDbContext _context;

    public InvoiceServiceService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumberable<Invoice>>
}