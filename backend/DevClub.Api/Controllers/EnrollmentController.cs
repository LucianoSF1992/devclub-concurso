using System.Security.Claims;
using DevClub.Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevClub.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class EnrollmentController : ControllerBase
{
private readonly AppDbContext _context;

public EnrollmentController(AppDbContext context)
{
    _context = context;
}

[HttpPost("{courseId:int}")]
public async Task<IActionResult> Enroll(
    int courseId,
    CancellationToken cancellationToken)
{
    var userIdClaim = User.FindFirstValue(
        ClaimTypes.NameIdentifier);

    if (!int.TryParse(userIdClaim, out var userId))
    {
        return Unauthorized(new
        {
            message = "Usuário não autenticado."
        });
    }

    var courseExists = await _context.Courses
        .AnyAsync(
            course =>
                course.Id == courseId &&
                course.IsPublished,
            cancellationToken);

    if (!courseExists)
    {
        return NotFound(new
        {
            message = "Curso não encontrado."
        });
    }

    var alreadyEnrolled = await _context.Enrollments
        .AnyAsync(
            enrollment =>
                enrollment.UserId == userId &&
                enrollment.CourseId == courseId,
            cancellationToken);

    if (alreadyEnrolled)
    {
        return Conflict(new
        {
            message = "Você já está matriculado neste curso."
        });
    }

    var enrollment = new Models.Enrollment
    {
        UserId = userId,
        CourseId = courseId
    };

    _context.Enrollments.Add(enrollment);

    await _context.SaveChangesAsync(
        cancellationToken);

    return Created(
        string.Empty,
        new
        {
            enrollment.Id,
            enrollment.CourseId,
            enrollment.EnrolledAt
        });
}

[HttpGet("my-courses")]
public async Task<IActionResult> GetMyCourses(
    CancellationToken cancellationToken)
{
    var userIdClaim = User.FindFirstValue(
        ClaimTypes.NameIdentifier);

    if (!int.TryParse(userIdClaim, out var userId))
    {
        return Unauthorized(new
        {
            message = "Usuário não autenticado."
        });
    }

    var courses = await _context.Enrollments
        .AsNoTracking()
        .Where(enrollment =>
            enrollment.UserId == userId &&
            enrollment.Course.IsPublished)
        .OrderByDescending(
            enrollment => enrollment.EnrolledAt)
        .Select(enrollment => new
        {
            enrollment.Course.Id,
            enrollment.Course.Title,
            enrollment.Course.Description,
            enrollment.Course.Slug,
            enrollment.Course.ImageUrl,
            enrollment.Course.Level,
            enrollment.Course.DurationInHours,
            enrollment.EnrolledAt
        })
        .ToListAsync(cancellationToken);

    return Ok(courses);
}

[HttpGet("my-courses/{courseId:int}")]
public async Task<IActionResult> GetMyCourse(
    int courseId,
    CancellationToken cancellationToken)
{
    var userIdClaim = User.FindFirstValue(
        ClaimTypes.NameIdentifier);

    if (!int.TryParse(userIdClaim, out var userId))
    {
        return Unauthorized(new
        {
            message = "Usuário não autenticado."
        });
    }

    var course = await _context.Enrollments
        .AsNoTracking()
        .Where(enrollment =>
            enrollment.UserId == userId &&
            enrollment.CourseId == courseId &&
            enrollment.Course.IsPublished)
        .Select(enrollment => new
        {
            enrollment.Course.Id,
            enrollment.Course.Title,
            enrollment.Course.Description,
            enrollment.Course.Slug,
            enrollment.Course.ImageUrl,
            enrollment.Course.Level,
            enrollment.Course.DurationInHours,
            enrollment.EnrolledAt,

            Modules = enrollment.Course.Modules
                .OrderBy(module => module.Order)
                .Select(module => new
                {
                    module.Id,
                    module.Title,
                    module.Order,

                    Lessons = module.Lessons
                        .OrderBy(lesson => lesson.Order)
                        .Select(lesson => new
                        {
                            lesson.Id,
                            lesson.Title,
                            lesson.Description,
                            lesson.VideoUrl,
                            lesson.DurationInMinutes,
                            lesson.Order
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
            message =
                "Curso não encontrado ou você não está matriculado."
        });
    }

    return Ok(course);
}

}
