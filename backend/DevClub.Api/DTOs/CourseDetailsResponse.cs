namespace DevClub.Api.DTOs;

public class CourseDetailsResponse
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Slug { get; set; } = string.Empty;

    public string? ImageUrl { get; set; }

    public string Level { get; set; } = string.Empty;

    public int DurationInHours { get; set; }

    public List<CourseModuleResponse> Modules { get; set; } = [];
}

public class CourseModuleResponse
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public int Order { get; set; }

    public List<LessonResponse> Lessons { get; set; } = [];
}

public class LessonResponse
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public string? VideoUrl { get; set; }

    public int DurationInMinutes { get; set; }

    public int Order { get; set; }
}