using DevClub.Api.Data;
using DevClub.Api.DTOs;
using DevClub.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevClub.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContactController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        CreateContactMessageRequest request,
        CancellationToken cancellationToken)
    {
        var contactMessage = new ContactMessage
        {
            Name = request.Name,
            Email = request.Email,
            Message = request.Message
        };

        _context.ContactMessages.Add(contactMessage);

        await _context.SaveChangesAsync(cancellationToken);

        return CreatedAtAction(
            nameof(GetById),
            new { id = contactMessage.Id },
            contactMessage);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(
        int id,
        CancellationToken cancellationToken)
    {
        var contactMessage = await _context.ContactMessages
            .AsNoTracking()
            .FirstOrDefaultAsync(
                x => x.Id == id,
                cancellationToken);

        if (contactMessage is null)
        {
            return NotFound();
        }

        return Ok(contactMessage);
    }
}