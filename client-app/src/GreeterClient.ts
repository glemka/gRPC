import { HelloRequest } from './generated/greet_pb';
import { GreeterClient } from './generated/greet_pb_service';


var client = new GreeterClient('https://localhost:5001')

export const sendRequest = (name: string) => {
    var request = new HelloRequest();
    request.setName(name);

    client.sayHello(request, (err, response) => {
        if (response) {
            console.log(response.getMessage())
        }
        if (err) {
            console.log(err);
        }
    });
}