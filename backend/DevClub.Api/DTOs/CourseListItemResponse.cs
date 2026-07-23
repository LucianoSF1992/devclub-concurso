namespace DevClub.Api.DTOs;

public class CourseListItemResponse
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Slug { get; set; } = string.Empty;

    public string? ImageUrl { get; set; }

    public string Level { get; set; } = string.Empty;

    public int DurationInHours { get; set; }
}