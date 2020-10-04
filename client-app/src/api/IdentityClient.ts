import { LoginRequest, LoginReply, RegisterReply, RegisterRequest, ListRequest } from '../generated/Identity/identity_pb';
import { Identity, IdentityClient } from '../generated/Identity/identity_pb_service';
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


export const loginCommand = (email: string, password: string) : Promise<LoginReply>=> {
  
    return new Promise((resolve, reject) => {
        var request = new LoginRequest();
        request.setEmail(email);
        request.setPassword(password)
        client.login(request, (err, response) => {
            if (response) {
                return resolve(response);
            }
            if (err) {
                return reject(err);
            }
        });
    })
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