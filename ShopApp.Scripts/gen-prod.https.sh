rm ../ShopApp.Shared/src/ShopApp.Shared/Cert/prod.crt 
rm ../ShopApp.Shared/src/ShopApp.Shared/Cert/prod.key 
rm ../ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx

dotnet dev-certs https -ep ../ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx -p password
openssl pkcs12 -in ../ShopApp.Shared/src/ShopApp.Shared/Cert/aspnetapp.pfx -out ../ShopApp.Shared/src/ShopApp.Shared/Cert/certificate.txt -nodes -password pass:password

# seed -n '-----BEGIN PRIVATE KEY-----' '-----END PRIVATE KEY-----'

awk '/-----BEGIN PRIVATE KEY----/,/-----END PRIVATE KEY-----/' ../ShopApp.Shared/src/ShopApp.Shared/Cert/certificate.txt  > ../ShopApp.Shared/src/ShopApp.Shared/Cert/prod.key
awk '/-----BEGIN CERTIFICATE-----/,/-----END CERTIFICATE-----/' ../ShopApp.Shared/src/ShopApp.Shared/Cert/certificate.txt  > ../ShopApp.Shared/src/ShopApp.Shared/Cert/prod.crt

rm ../ShopApp.Shared/src/ShopApp.Shared/Cert/certificate.txt

