namespace DevClub.Api.Models;

public class User
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<Enrollment> Enrollments { get; set; } =
        new List<Enrollment>();

    public ICollection<LessonProgress> LessonProgress { get; set; } =
        new List<LessonProgress>();
}