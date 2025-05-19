using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain.Entities
{
    public class Invoice
    {
        [Key]
        public int id { get; set; }
        public required double sub_total { get; set; }
        public required int discount { get; set; }
        public required double total { get; set; }
        public required DateOnly invoiceCreated { get; set; }
        public required DateOnly invoiceDueDate { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        
        public User? User { get; set; }

    }
}