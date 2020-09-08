using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using MediatR;
using Microsoft.Extensions.Logging;
using ShopApp.Product.Application.Products;

namespace ShopApp.Product.Api
{
    public class ProductService : Product.ProductBase
    {
        private readonly ILogger<ProductService> _logger;
        private readonly IMediator mediator;

        public ProductService(ILogger<ProductService> logger, IMediator mediator)
        {
            _logger = logger;
            this.mediator = mediator;
        }

        public override async Task<ListReply> List(ListRequest request, ServerCallContext context)
        {
            var c = await this.mediator.Send(new List.Query());
            var u = new ListReply();
            c.ForEach(d => u.Items.Add(new ProductItem() { Id = d.Id.ToString(), Name = d.Name}));
            return u;
        }
        public override async Task<CreateReply> Create(CreateRequest request, ServerCallContext context)
        {
            var c = await this.mediator.Send(new Create.Command(request.Name));
            return new CreateReply { Id = c.ToString() };
        }
    }
}
