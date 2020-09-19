import { CreateRequest, ListRequest } from './generated/Order/order_pb';
import { OrderClient } from './generated/Order/order_pb_service';

var productUrl = process.env.REACT_APP_API_GATEWAY;

var client = new OrderClient(productUrl!)

export const createCommand = (id: string) => {
    var request = new CreateRequest();
    request.setProductid(id);

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