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

    public DbSet<User> Users => Set<User>();

    public DbSet<Course> Courses => Set<Course>();

    public DbSet<CourseModule> CourseModules => Set<CourseModule>();

    public DbSet<Lesson> Lessons => Set<Lesson>();

    public DbSet<Enrollment> Enrollments => Set<Enrollment>();

    public DbSet<LessonProgress> LessonProgress => Set<LessonProgress>();

    protected override void OnModelCreating(
        ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasIndex(user => user.Email)
            .IsUnique();

        modelBuilder.Entity<User>()
            .Property(user => user.Name)
            .IsRequired();

        modelBuilder.Entity<User>()
            .Property(user => user.Email)
            .IsRequired();

        modelBuilder.Entity<User>()
            .Property(user => user.PasswordHash)
            .IsRequired();

        modelBuilder.Entity<Course>()
            .HasIndex(course => course.Slug)
            .IsUnique();

        modelBuilder.Entity<Course>()
            .Property(course => course.Title)
            .IsRequired();

        modelBuilder.Entity<Course>()
            .Property(course => course.Slug)
            .IsRequired();

        modelBuilder.Entity<CourseModule>()
            .HasOne(courseModule => courseModule.Course)
            .WithMany(course => course.Modules)
            .HasForeignKey(courseModule => courseModule.CourseId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Lesson>()
            .HasOne(lesson => lesson.CourseModule)
            .WithMany(courseModule => courseModule.Lessons)
            .HasForeignKey(lesson => lesson.CourseModuleId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Enrollment>()
            .HasOne(enrollment => enrollment.User)
            .WithMany(user => user.Enrollments)
            .HasForeignKey(enrollment => enrollment.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Enrollment>()
            .HasOne(enrollment => enrollment.Course)
            .WithMany(course => course.Enrollments)
            .HasForeignKey(enrollment => enrollment.CourseId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Enrollment>()
            .HasIndex(enrollment => new
            {
                enrollment.UserId,
                enrollment.CourseId
            })
            .IsUnique();

        modelBuilder.Entity<LessonProgress>()
            .HasOne(progress => progress.User)
            .WithMany(user => user.LessonProgress)
            .HasForeignKey(progress => progress.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<LessonProgress>()
            .HasOne(progress => progress.Lesson)
            .WithMany(lesson => lesson.Progress)
            .HasForeignKey(progress => progress.LessonId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<LessonProgress>()
            .HasIndex(progress => new
            {
                progress.UserId,
                progress.LessonId
            })
            .IsUnique();
    }
}