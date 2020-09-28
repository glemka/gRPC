using Microsoft.AspNetCore.Identity;
using System;

namespace ShopApp.Identity.Domain
{
    public class AppUser: IdentityUser
    {
        public string DisplayName { get; set; }
    }
}
