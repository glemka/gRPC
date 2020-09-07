using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace ShopApp.Common.Mongo
{
    public static class Extensions
    {
        public static void AddMongo(this IServiceCollection services)
        {
            //services.Configure<MongoOptions>(this.configuration.GetSection("mongo"));


            services.AddSingleton(provider =>
            {
                var configuration = provider.GetService<IConfiguration>();
                var options = configuration.GetOptions<MongoOptions>("mongo");
                return options;
            });

            services.AddScoped(c =>
            {
                var options = c.GetService<MongoOptions>();
                return new MongoClient(options.ConnectionString);
            });

            services.AddScoped(c =>
            {
                var options = c.GetService<MongoOptions>();
                var client = c.GetService<MongoClient>();
                return client.GetDatabase(options.Database);
            });
        }
    }
}
