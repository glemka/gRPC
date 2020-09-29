using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ShopApp.Common.Authentication
{
    public static class Extension
    {
        public static void AddJwt(this IServiceCollection services)
        {

            IConfiguration configuration;
            using (var serviceProvider = services.BuildServiceProvider())
            {
                configuration = serviceProvider.GetService<IConfiguration>();
            }

            var options = configuration.GetOptions<JwtOptions>("jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(options.TokenKey));
            services.AddScoped<IJwtGenerator, JwtGenerator>();
            services.AddTransient<AccessTokenValidatorMiddleware>();
            services.AddHttpContextAccessor();


            services.AddTransient<IAccessTokenService, AccessTokenService>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = key,
                        ValidateAudience = false,
                        ValidateIssuer = false
                    };
                });
        }
        public static IApplicationBuilder UseAccessTokenValidator(this IApplicationBuilder app)
           => app.UseMiddleware<AccessTokenValidatorMiddleware>();
    }
}