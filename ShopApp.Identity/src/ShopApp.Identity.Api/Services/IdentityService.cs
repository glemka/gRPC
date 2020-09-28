using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using ShopApp.Identity.Application;

namespace ShopApp.Identity.Api
{
    public class IdentityService : Identity.IdentityBase
    {
        private readonly ILogger<IdentityService> _logger;
        private readonly IMediator mediator;

        public IdentityService(ILogger<IdentityService> logger, IMediator mediator)
        {
            _logger = logger;
            this.mediator = mediator;
        }

        [AllowAnonymous]
        public override async Task<LoginReply> Login(LoginRequest request, ServerCallContext context)
        {
            var query = new Login.Query() { Email = request.Email, Password = request.Password };
            var result =  await this.mediator.Send(query);
            return new LoginReply
            {
                DisplayName = result.DisplayName,
                Token = result.Token,
                Username = result.Username
            };
        }

        [AllowAnonymous]
        public override async Task<RegisterReply> Register(RegisterRequest request, ServerCallContext context)
        {
            var query = new Register.Command() { Email = request.Email, Password = request.Password, DisplayName = request.DisplayName, Username = request.Username};
            var result = await this.mediator.Send(query);
            return new RegisterReply
            {
                DisplayName = result.DisplayName,
                Token = result.Token,
                Username = result.Username
            };
        }
               
        public override async Task<ListReply> List(ListRequest request, ServerCallContext context)
        {
            var query = new List.Query();
            var result = await this.mediator.Send(query);
            var u = new ListReply();
            result.ForEach(d => u.Items.Add(new  IdentityItem() { DisplayName = d.DisplayName, Username=d.Username }));
            return u;
        }

    }
}
