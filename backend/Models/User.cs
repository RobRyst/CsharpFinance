using System.ComponentModel.DataAnnotations;

namespace FinanceApp.Models
{
    public class User
    {

        [Key] public int Id { get; set; }

        [Required]
        [MaxLength(100)]
         public string Name { get; set; }

        [Required]
        [MaxLength(100)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }
    }
}