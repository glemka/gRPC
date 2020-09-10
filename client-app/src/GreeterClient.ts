import { CreateRequest, ListRequest } from './generated/Product/product_pb';
import { ProductClient } from './generated/Product/product_pb_service';

var productUrl = process.env.REACT_APP_PRODUCT_URL;

var client = new ProductClient(productUrl!)

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