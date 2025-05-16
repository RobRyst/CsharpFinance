using System.ComponentModel.DataAnnotations;

namespace FinanceApp.Models
{
    public class Invoice
    {
        [Key]
        public int id { get; set; }
        [Required]
        public double sub_total { get; set; }
        [Required]
        public int discount { get; set; }
        [Required]
        public double total { get; set; }
        [Required]
        public DateOnly invoiceCreated { get; set; }
        [Required]
        public DateOnly invoiceDueDate { get; set; }

    }
}