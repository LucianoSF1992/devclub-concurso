namespace DevClub.Api.Models;

public class Lesson
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string? VideoUrl { get; set; }

    public int DurationInMinutes { get; set; }

    public int Order { get; set; }

    public int CourseModuleId { get; set; }

    public CourseModule CourseModule { get; set; } = null!;

    public ICollection<LessonProgress> Progress { get; set; } =
        new List<LessonProgress>();
}