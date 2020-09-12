#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["ShopApp.Product/src/ShopApp.Product.Api/ShopApp.Product.Api.csproj", "ShopApp.Product/src/ShopApp.Product.Api/"]
COPY ["ShopApp.Common/src/ShopApp.Common/ShopApp.Common.csproj", "ShopApp.Common/src/ShopApp.Common/"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/ShopApp.Shared.csproj", "ShopApp.Shared/src/ShopApp.Shared/"]
COPY ["ShopApp.Product/src/ShopApp.Product.Application/ShopApp.Product.Application.csproj", "ShopApp.Product/src/ShopApp.Product.Application/"]
COPY ["ShopApp.Product/src/ShopApp.Product.Domain/ShopApp.Product.Domain.csproj", "ShopApp.Product/src/ShopApp.Product.Domain/"]
RUN dotnet restore "ShopApp.Product/src/ShopApp.Product.Api/ShopApp.Product.Api.csproj"

COPY ./ShopApp.Product/ ./ShopApp.Product/
COPY ./ShopApp.Common/ ./ShopApp.Common/
COPY ./ShopApp.Shared/ ./ShopApp.Shared/

WORKDIR "/src/ShopApp.Product/src/ShopApp.Product.Api/"
RUN dotnet build "ShopApp.Product.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShopApp.Product.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx", "/https/aspnetapp.pfx"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/prod.crt", "/usr/local/share/ca-certificates/prod.crt"]

RUN chmod 644 /usr/local/share/ca-certificates/prod.crt && update-ca-certificates
ENTRYPOINT ["dotnet", "ShopApp.Product.Api.dll"]