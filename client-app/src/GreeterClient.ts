import { HelloRequest } from './generated/Product/product_pb';
import { ProductClient } from './generated/Product/product_pb_service';


var client = new ProductClient('https://localhost:5001')

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