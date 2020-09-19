#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["ShopApp.Order/src/ShopApp.Order.Api/ShopApp.Order.Api.csproj", "ShopApp.Order/src/ShopApp.Order.Api/"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/ShopApp.Shared.csproj", "ShopApp.Shared/src/ShopApp.Shared/"]
RUN dotnet restore "ShopApp.Order/src/ShopApp.Order.Api/ShopApp.Order.Api.csproj"

COPY ./ShopApp.Order/ ./ShopApp.Order/
COPY ./ShopApp.Shared/ ./ShopApp.Shared/

WORKDIR "/src/ShopApp.Order/src/ShopApp.Order.Api/"
RUN dotnet build "ShopApp.Order.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShopApp.Order.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx", "/https/aspnetapp.pfx"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/prod.crt", "/usr/local/share/ca-certificates/prod.crt"]

RUN chmod 644 /usr/local/share/ca-certificates/prod.crt && update-ca-certificates
ENTRYPOINT ["dotnet", "ShopApp.Order.Api.dll"]