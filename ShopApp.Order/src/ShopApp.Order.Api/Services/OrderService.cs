using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.Extensions.Logging;


namespace ShopApp.Order.Api
{
    public class Orderervice : Order.OrderBase
    {
        private readonly ILogger<Orderervice> _logger;
        public Orderervice(ILogger<Orderervice> logger)
        {
            _logger = logger;
        }

        public override async Task<CreateReply> Create(CreateRequest request, ServerCallContext context)
        {
            return new CreateReply { Id = Guid.NewGuid().ToString() };
        }

        public override async Task<ListReply> List(ListRequest request, ServerCallContext context)
        {
            var reply = new ListReply();
            reply.Items.Add(new OrderItem { Id = Guid.NewGuid().ToString(), ProductId = Guid.NewGuid().ToString()});
            return reply;
        }

    }
}
