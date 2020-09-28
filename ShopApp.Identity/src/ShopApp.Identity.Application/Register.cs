using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ShopApp.Common.Authentication;
using ShopApp.Identity.Domain;
using ShopApp.Identity.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ShopApp.Identity.Application
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

       
        public class Handler : IRequestHandler<Command, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly DataContext _context;
            private readonly IJwtGenerator _jwtGenerator;

            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                this._jwtGenerator = jwtGenerator;
                this._context = context;
                this._userManager = userManager;

            }
            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if (await _context.Users.Where(x => x.Email == request.Email).AnyAsync())
                {
                    throw new Exception("Email already exists");
                }
                if (await _context.Users.Where(x => x.UserName == request.Username).AnyAsync())
                {
                    throw new Exception("Username already exists");
                }
                var user = new AppUser
                {
                    DisplayName = request.DisplayName,
                    UserName = request.Username,
                    Email = request.Email
                };

                var result = await _userManager.CreateAsync(user, request.Password);
                if (result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = request.DisplayName,
                        Username = request.Username,
                        Token = _jwtGenerator.CreateToken(user.Id)
                    };
                }
                throw new Exception("Problem creating user");
            }
        }
    }
}
