using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ShopApp.Common.Authentication
{
    public interface IAccessTokenService
    {
        Task<bool> IsCurrentActiveToken();

    }
}
