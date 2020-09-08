$protoc = $PSScriptRoot + '.\protoc-3.13.0-win64\protoc.exe'
$arguments = "--plugin=protoc-gen-ts=..\client-app\node_modules\.bin\protoc-gen-ts.cmd ";
$arguments +="--js_out=import_style=commonjs,binary:..\client-app\src\generated\Product ";
$arguments +="--ts_out=service=grpc-web:..\client-app\src\generated\Product "
$arguments +="-I ..\ShopApp.Product\src\ShopApp.Product.Api\Protos ..\ShopApp.Product\src\ShopApp.Product.Api\Protos\product.proto"
Start-Process $protoc -ArgumentList $arguments -NoNewWindow