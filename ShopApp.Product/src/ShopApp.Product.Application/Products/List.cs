using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ShopApp.Product.Application.Products
{
    public class List
    {
        public class Query : IRequest<List<ShopApp.Product.Domain.Product>>
        {
        }
        public class Handler : IRequestHandler<Query, List<ShopApp.Product.Domain.Product>>
        {
            private readonly IMongoDatabase database;

            public Handler(IMongoDatabase database)
            {
                this.database = database;
            }

            public async Task<List<Domain.Product>> Handle(Query request, CancellationToken cancellationToken)
            {
                var data = this.database.GetCollection<Domain.Product>("products");
                var readAll = await data.FindAsync(new BsonDocument());
                return await readAll.ToListAsync();
       
            }
        }
    }
}