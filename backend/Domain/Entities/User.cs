using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain.Entities
{
    public class User
    {

        [Key] public int Id { get; set; }

        [MaxLength(100)]
        public required string Name { get; set; } = string.Empty;

        [MaxLength(100)]
        [EmailAddress]
        public required string Email { get; set; } = string.Empty;

        public string PasswordHash { get; set; } = default!;

        public ICollection<Invoice> Invoices { get; set; } = new List<Invoice>();
    }
}