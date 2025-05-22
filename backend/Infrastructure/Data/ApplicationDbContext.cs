using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

using backend.Domain.Entities;

namespace backend.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Invoice> Invoices { get; set; }
    }
}
