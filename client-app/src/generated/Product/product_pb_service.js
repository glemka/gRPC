// package: product
// file: product.proto
/* eslint-disable */
var product_pb = require("./product_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Product = (function () {
  function Product() {}
  Product.serviceName = "product.Product";
  return Product;
}());

Product.Create = {
  methodName: "Create",
  service: Product,
  requestStream: false,
  responseStream: false,
  requestType: product_pb.CreateRequest,
  responseType: product_pb.CreateReply
};

Product.List = {
  methodName: "List",
  service: Product,
  requestStream: false,
  responseStream: false,
  requestType: product_pb.ListRequest,
  responseType: product_pb.ListReply
};

exports.Product = Product;

function ProductClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProductClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Product.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProductClient.prototype.list = function list(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Product.List, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProductClient = ProductClient;

