using System.Security.Claims;
using DevClub.Api.Data;
using DevClub.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevClub.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class LessonProgressController : ControllerBase
{
    private readonly AppDbContext _context;

    public LessonProgressController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("course/{courseId:int}")]
    public async Task<IActionResult> GetCourseProgress(
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

        var isEnrolled = await _context.Enrollments
            .AnyAsync(
                enrollment =>
                    enrollment.UserId == userId &&
                    enrollment.CourseId == courseId,
                cancellationToken);

        if (!isEnrolled)
        {
            return Forbid();
        }

        var lessons = await _context.Lessons
            .AsNoTracking()
            .Where(lesson =>
                lesson.CourseModule.CourseId == courseId)
            .OrderBy(lesson => lesson.CourseModule.Order)
            .ThenBy(lesson => lesson.Order)
            .Select(lesson => new
            {
                lesson.Id,
                lesson.Title,
                ModuleId = lesson.CourseModuleId,
                ModuleTitle = lesson.CourseModule.Title,

                IsCompleted = _context.LessonProgress
                    .Any(progress =>
                        progress.UserId == userId &&
                        progress.LessonId == lesson.Id &&
                        progress.IsCompleted)
            })
            .ToListAsync(cancellationToken);

        var totalLessons = lessons.Count;

        var completedLessons = lessons.Count(
            lesson => lesson.IsCompleted);

        var progressPercentage = totalLessons == 0
            ? 0
            : Math.Round(
                completedLessons * 100.0 / totalLessons,
                2);

        return Ok(new
        {
            CourseId = courseId,
            TotalLessons = totalLessons,
            CompletedLessons = completedLessons,
            ProgressPercentage = progressPercentage,
            Lessons = lessons
        });
    }

    [HttpPost("lesson/{lessonId:int}/complete")]
    public async Task<IActionResult> CompleteLesson(
        int lessonId,
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

        var lesson = await _context.Lessons
            .AsNoTracking()
            .Where(lesson =>
                lesson.Id == lessonId)
            .Select(lesson => new
            {
                lesson.Id,
                CourseId = lesson.CourseModule.CourseId
            })
            .FirstOrDefaultAsync(cancellationToken);

        if (lesson is null)
        {
            return NotFound(new
            {
                message = "Aula não encontrada."
            });
        }

        var isEnrolled = await _context.Enrollments
            .AnyAsync(
                enrollment =>
                    enrollment.UserId == userId &&
                    enrollment.CourseId == lesson.CourseId,
                cancellationToken);

        if (!isEnrolled)
        {
            return Forbid();
        }

        var progress = await _context.LessonProgress
            .FirstOrDefaultAsync(
                progress =>
                    progress.UserId == userId &&
                    progress.LessonId == lessonId,
                cancellationToken);

        if (progress is null)
        {
            progress = new LessonProgress
            {
                UserId = userId,
                LessonId = lessonId,
                IsCompleted = true,
                CompletedAt = DateTime.UtcNow
            };

            _context.LessonProgress.Add(progress);
        }
        else
        {
            progress.IsCompleted = true;
            progress.CompletedAt = DateTime.UtcNow;
        }

        await _context.SaveChangesAsync(
            cancellationToken);

        return Ok(new
        {
            LessonId = lessonId,
            IsCompleted = progress.IsCompleted,
            progress.CompletedAt
        });
    }

    [HttpDelete("lesson/{lessonId:int}/complete")]
    public async Task<IActionResult> UncompleteLesson(
        int lessonId,
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

        var lesson = await _context.Lessons
            .AsNoTracking()
            .Where(lesson =>
                lesson.Id == lessonId)
            .Select(lesson => new
            {
                lesson.Id,
                CourseId = lesson.CourseModule.CourseId
            })
            .FirstOrDefaultAsync(cancellationToken);

        if (lesson is null)
        {
            return NotFound(new
            {
                message = "Aula não encontrada."
            });
        }

        var isEnrolled = await _context.Enrollments
            .AnyAsync(
                enrollment =>
                    enrollment.UserId == userId &&
                    enrollment.CourseId == lesson.CourseId,
                cancellationToken);

        if (!isEnrolled)
        {
            return Forbid();
        }

        var progress = await _context.LessonProgress
            .FirstOrDefaultAsync(
                progress =>
                    progress.UserId == userId &&
                    progress.LessonId == lessonId,
                cancellationToken);

        if (progress is null)
        {
            return NotFound(new
            {
                message = "Progresso da aula não encontrado."
            });
        }

        progress.IsCompleted = false;
        progress.CompletedAt = null;

        await _context.SaveChangesAsync(
            cancellationToken);

        return Ok(new
        {
            LessonId = lessonId,
            IsCompleted = false,
            CompletedAt = (DateTime?)null
        });
    }
}
