using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain.Entities
{
    public class User
    {

        [Key] public int Id { get; set; }

        [MaxLength(100)]
        public required string Name { get; set; }

        [MaxLength(100)]
        [EmailAddress]
        public required string Email { get; set; }

        public required string PasswordHash { get; set; }

        public ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();
    }
}