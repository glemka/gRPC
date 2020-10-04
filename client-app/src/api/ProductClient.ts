import { LoginRequest } from '../generated/Identity/identity_pb';
import { IdentityClient } from '../generated/Identity/identity_pb_service';
import { CreateRequest, ListRequest } from '../generated/Product/product_pb';
import { Product, ProductClient } from '../generated/Product/product_pb_service';
import { grpc } from "@improbable-eng/grpc-web";

var apiUrl = process.env.REACT_APP_API_GATEWAY;
var apiIdentityUrl = process.env.REACT_APP_API_IDENTITY;

var client = new ProductClient(apiUrl!)
var Idclient = new IdentityClient(apiIdentityUrl!)

export const createCommand = (name: string) => {
    var request = new CreateRequest();
    request.setName(name);

    client.create(request, (err, response) => {
        if (response) {
            console.log(response.getId())
        }
        if (err) {
            console.log(err);
        }
    });
}



export const test =(email: string, password: string) => {
    var request = new LoginRequest();
    request.setEmail(email);
    request.setPassword(password)
    Idclient.login(request, (err, response) => {
        if (response) {
            console.log(response.toObject())
            var listRequest = new ListRequest();            
            var c = `Bearer ${response.getToken()}`;
            grpc.invoke(Product.List, {
                request: listRequest,
                metadata: new grpc.Metadata({'Authorization':c}),
                host: apiUrl!,
                onMessage: (message: ListRequest) => {
                console.log("got products: ", message.toObject());
                },
                onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
                    if (code == grpc.Code.OK) {
                        console.log("all ok")
                    } else {
                        console.log("hit an error", code, msg, trailers);
                    }
                }

            })
        }
        if (err) {
            console.log(err);
        }
    });
}



export const listCommand = () => {
    var request = new ListRequest();

    client.list(request, (err, response) => {
        if (response) {
            console.log(response.toObject())
        }
        if (err) {
            console.log(err);
        }
    });
}