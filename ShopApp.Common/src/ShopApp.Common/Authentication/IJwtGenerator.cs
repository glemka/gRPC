namespace ShopApp.Common.Authentication
{
    public interface IJwtGenerator
    {
        string CreateToken(string userId);
    }
}