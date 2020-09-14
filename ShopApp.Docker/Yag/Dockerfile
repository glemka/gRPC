#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["ShopApp.YAG/src/ShopApp.YAG/ShopApp.YAG.csproj", "ShopApp.YAG/src/ShopApp.YAG/"]
COPY ["ShopApp.Common/src/ShopApp.Common/ShopApp.Common.csproj", "ShopApp.Common/src/ShopApp.Common/"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/ShopApp.Shared.csproj", "ShopApp.Shared/src/ShopApp.Shared/"]
RUN dotnet restore "ShopApp.YAG/src/ShopApp.YAG/ShopApp.YAG.csproj"

COPY ./ShopApp.YAG/ ./ShopApp.YAG/
COPY ./ShopApp.Shared/ ./ShopApp.Shared/
COPY ./ShopApp.Common/ ./ShopApp.Common/

WORKDIR "/src/ShopApp.YAG/src/ShopApp.YAG"
RUN dotnet build "ShopApp.YAG.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShopApp.YAG.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx", "/https/aspnetapp.pfx"]
COPY ["ShopApp.Shared/src/ShopApp.Shared/Cert/prod.crt", "/usr/local/share/ca-certificates/prod.crt"]

RUN chmod 644 /usr/local/share/ca-certificates/prod.crt && update-ca-certificates
ENTRYPOINT ["dotnet", "ShopApp.YAG.dll"]