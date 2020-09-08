using ShopApp.Common;
using System;

namespace ShopApp.Product.Domain
{
    public class Product : IIdentifiable
    {
        public Product(Guid id, string name)
        {
            Id = id;
            Name = name;
        }

        public Guid Id { get; private set; }
        public string Name { get; private set; }

    }
}