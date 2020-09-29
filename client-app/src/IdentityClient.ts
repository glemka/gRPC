import { LoginRequest, LoginReply, RegisterReply, RegisterRequest, ListRequest } from './generated/Identity/identity_pb';
import { Identity, IdentityClient } from './generated/Identity/identity_pb_service';
import { grpc } from "@improbable-eng/grpc-web";

var apiIdentityUrl = process.env.REACT_APP_API_IDENTITY;
console.log(apiIdentityUrl)
var client = new IdentityClient(apiIdentityUrl!)

export const registerCommand = (username: string, displayname: string, email: string, password: string) => {
    var request = new RegisterRequest();
    request.setDisplayname(displayname);
    request.setEmail(email);
    request.setUsername(username);
    request.setPassword(password)

    client.register(request, (err, response) => {
        if (response) {
            console.log(response.toObject())
        }
        if (err) {
            console.log(err);
        }
    });
}


export const loginCommand = (email: string, password: string) => {
    var request = new LoginRequest();
    request.setEmail(email);
    request.setPassword(password)
    client.login(request, (err, response) => {
        if (response) {
            console.log(response.toObject())
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
    client.login(request, (err, response) => {
        if (response) {
            console.log(response.toObject())
            var listRequest = new ListRequest();            
            var c = `Bearer ${response.getToken()}`;
            grpc.invoke(Identity.List, {
                request: listRequest,
                metadata: new grpc.Metadata({'Authorization':c}),
                host: process.env.REACT_APP_API_GATEWAY!,
                onMessage: (message: ListRequest) => {
                console.log("got users: ", message.toObject());
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