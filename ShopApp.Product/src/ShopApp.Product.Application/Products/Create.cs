using MediatR;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ShopApp.Product.Application.Products
{
    public class Create
    {
        public class Command : IRequest<Guid>
        {
            public Command(string name)
            {
                Name = name;
            }

            public string Name { get; private set; }
        }


        public class Handler : IRequestHandler<Command, Guid>
        {
            private readonly IMongoDatabase database;

            public Handler(IMongoDatabase database)
            {
                this.database = database;
            }

            public async Task<Guid> Handle(Command request, CancellationToken cancellationToken)
            {
                var c = new Domain.Product(Guid.NewGuid(), request.Name);
                var data = this.database.GetCollection<Domain.Product>("products");
                await data.InsertOneAsync(c);
                return c.Id;
            }
        }
    }
    
}
