using MediatR;
using Microsoft.AspNetCore.Identity;
using ShopApp.Common.Authentication;
using ShopApp.Identity.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ShopApp.Identity.Application
{
    public class Login
    {
        public class Query : IRequest<User>
        {
            public string Email { get; set; }
            public string Password { get; set; }
        }
      

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly SignInManager<AppUser> _signInManager;
            private readonly IJwtGenerator _jwtGenerator;

            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IJwtGenerator jwtGenerator)
            {
                this._jwtGenerator = jwtGenerator;
                this._signInManager = signInManager;
                this._userManager = userManager;

            }
            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await this._userManager.FindByEmailAsync(request.Email);
                if (user == null)
                {
                    throw new Exception("HttpStatusCode.Unauthorized");
                }
                var result = await this._signInManager.CheckPasswordSignInAsync(user, request.Password, false);
                if (result.Succeeded)
                {
                    return new User
                    {
                        DisplayName = user.DisplayName,
                        Token = this._jwtGenerator.CreateToken(user.Id),
                        Username = user.UserName,
                    };
                }
                throw new Exception("HttpStatusCode.Unauthorized");
            }
        }
    }
}
