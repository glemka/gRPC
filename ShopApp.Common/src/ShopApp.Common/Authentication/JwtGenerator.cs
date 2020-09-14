using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ShopApp.Common.Authentication
{
    public class JwtGenerator : IJwtGenerator
    {
        
        private readonly SymmetricSecurityKey _key;
        public JwtGenerator(IConfiguration config)
        {
            var options = config.GetOptions<JwtOptions>("jwt");
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(options.TokenKey));
        }
        public string CreateToken(string userId)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.NameId, userId)
            };
            //generate signin credentials


            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}