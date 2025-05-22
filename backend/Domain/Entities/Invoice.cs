using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain.Entities
{
    public class Invoice
    {
        [Key]
        public int Id { get; set; }
        public required string Status { get; set; }
        public required double Sub_total { get; set; }
        public int Discount { get; set; }
        public required double Total { get; set; }
        public required DateOnly InvoiceCreated { get; set; }
        public required DateOnly InvoiceDueDate { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        
        public User? User { get; set; }

    }
}