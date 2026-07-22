using DevClub.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DevClub.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();
}