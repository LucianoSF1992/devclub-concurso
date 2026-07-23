using DevClub.Api.Data;
using DevClub.Api.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevClub.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CoursesController : ControllerBase
{
    private readonly AppDbContext _context;

    public CoursesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CourseListItemResponse>>> GetAll(
        CancellationToken cancellationToken)
    {
        var courses = await _context.Courses
            .AsNoTracking()
            .Where(course => course.IsPublished)
            .OrderBy(course => course.Title)
            .Select(course => new CourseListItemResponse
            {
                Id = course.Id,
                Title = course.Title,
                Description = course.Description,
                Slug = course.Slug,
                ImageUrl = course.ImageUrl,
                Level = course.Level,
                DurationInHours = course.DurationInHours
            })
            .ToListAsync(cancellationToken);

        return Ok(courses);
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<CourseDetailsResponse>> GetBySlug(
        string slug,
        CancellationToken cancellationToken)
    {
        var course = await _context.Courses
            .AsNoTracking()
            .Where(course =>
                course.Slug == slug &&
                course.IsPublished)
            .Select(course => new CourseDetailsResponse
            {
                Id = course.Id,
                Title = course.Title,
                Description = course.Description,
                Slug = course.Slug,
                ImageUrl = course.ImageUrl,
                Level = course.Level,
                DurationInHours = course.DurationInHours,

                Modules = course.Modules
                    .OrderBy(module => module.Order)
                    .Select(module => new CourseModuleResponse
                    {
                        Id = module.Id,
                        Title = module.Title,
                        Order = module.Order,

                        Lessons = module.Lessons
                            .OrderBy(lesson => lesson.Order)
                            .Select(lesson => new LessonResponse
                            {
                                Id = lesson.Id,
                                Title = lesson.Title,
                                Description = lesson.Description,
                                VideoUrl = lesson.VideoUrl,
                                DurationInMinutes =
                                    lesson.DurationInMinutes,
                                Order = lesson.Order
                            })
                            .ToList()
                    })
                    .ToList()
            })
            .FirstOrDefaultAsync(cancellationToken);

        if (course is null)
        {
            return NotFound(new
            {
                message = "Curso não encontrado."
            });
        }

        return Ok(course);
    }
}