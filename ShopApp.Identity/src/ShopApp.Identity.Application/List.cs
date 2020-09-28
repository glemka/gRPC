using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ShopApp.Identity.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ShopApp.Identity.Application
{
    public class List
    {
        public class Query : IRequest<List<User>>
        {
        }
        public class Handler : IRequestHandler<Query, List<User>>
        {
            private readonly UserManager<AppUser> _userManager;

            public Handler(UserManager<AppUser> userManager)
            {
                this._userManager = userManager;

            }

            public async Task<List<User>> Handle(Query request, CancellationToken cancellationToken)
            {
                var users = await this._userManager.Users.ToListAsync();
                var result = new List<User>();
                users.ForEach(c => result.Add(new User { DisplayName = c.DisplayName, Username = c.UserName }));
                return result;

            }
        }
    }
}
