namespace backend.Dtos
{
    public class InvoiceDto
    {
        public int Id { get; set; }
        public string Status { get; set; } = string.Empty;
        public double Sub_total { get; set; }
        public int Discount { get; set; }
        public double Total { get; set; }
        public DateOnly InvoiceCreated { get; set; }
        public DateOnly InvoiceDueDate { get; set; }

        public int UserId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
    }
}
