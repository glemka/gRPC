#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app


FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["ShopApp.Identity/src/ShopApp.Identity.Api/ShopApp.Identity.Api.csproj", "ShopApp.Identity/src/ShopApp.Identity.Api/"]
COPY ["ShopApp.Identity/src/ShopApp.Identity.Application/ShopApp.Identity.Application.csproj", "ShopApp.Identity/src/ShopApp.Identity.Application/"]
COPY ["ShopApp.Identity/src/ShopApp.Identity.Persistence/ShopApp.Identity.Persistence.csproj", "ShopApp.Identity/src/ShopApp.Identity.Persistence/"]
COPY ["ShopApp.Identity/src/ShopApp.Identity.Domain/ShopApp.Identity.Domain.csproj", "ShopApp.Identity/src/ShopApp.Identity.Domain/"]
COPY ["ShopApp.Common/src/ShopApp.Common/ShopApp.Common.csproj", "ShopApp.Common/src/ShopApp.Common/"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/ShopApp.Shared.csproj", "ShopApp.Shared/src/ShopApp.Shared/"]
RUN dotnet restore "ShopApp.Identity/src/ShopApp.Identity.Api/ShopApp.Identity.Api.csproj"
COPY ./ShopApp.Identity/ ./ShopApp.Identity/
COPY ./ShopApp.Common/ ./ShopApp.Common/
COPY ./ShopApp.Shared/ ./ShopApp.Shared/


WORKDIR "/src/ShopApp.Identity/src/ShopApp.Identity.Api"
RUN dotnet build "ShopApp.Identity.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShopApp.Identity.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx", "/https/aspnetapp.pfx"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/prod.crt", "/usr/local/share/ca-certificates/prod.crt"]

RUN chmod 644 /usr/local/share/ca-certificates/prod.crt && update-ca-certificates
ENTRYPOINT ["dotnet", "ShopApp.Identity.Api.dll"]