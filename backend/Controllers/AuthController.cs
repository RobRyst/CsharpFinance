using Microsoft.AspNetCore.Mvc;
using backend.Domain.Models;
using backend.Infrastructure.Data;
using backend.Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly PasswordHasher<User> _passwordHasher;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
            _passwordHasher = new PasswordHasher<User>();
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var user = _context.Users.FirstOrDefault(user => user.Email == request.Email);
            if (user == null)
            {
                return Unauthorized("Invalid Email or Password");
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Invalid Email or Password");
            }
            Console.WriteLine($"Login attempt: {request.Email} | Hash: {user?.PasswordHash}");
             return Ok(new { token = "fake-jwt-token",
                firstname = user.FirstName, 
                lastname = user.LastName  });
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequest request)
        {

                if (!ModelState.IsValid)
    {
                return BadRequest(ModelState);
    }
            var existingUser = _context.Users.FirstOrDefault(u => u.Email == request.Email);
            if (existingUser != null)
                return BadRequest("User with this email already exists. ");

            var user = new User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Address = request.Address,
                Email = request.Email,
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, request.Password);

            _context.Users.Add(user);
            _context.SaveChanges();

            Console.WriteLine($"Login attempt: {request.Email} | Hash: {user?.PasswordHash}");
            return Ok(new { token = "new-fake-jwt-token" });
        }
    }
}
