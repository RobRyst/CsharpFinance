using Microsoft.AspNetCore.Mvc;
using backend.Domain.Models;
using backend.Infrastructure.Data;
using backend.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;


using System.Text;

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
            if (user == null || _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.Password) == PasswordVerificationResult.Failed)
            {
                return Unauthorized("Invalid Email or Password");
            }

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("firstname", user.FirstName),
                new Claim("lastname", user.LastName),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your-token-password-key"));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: "your-api",
                audience: "your-client",
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: credentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
            return Ok(new { token = tokenString, firstname = user.FirstName, lastname = user.LastName });
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