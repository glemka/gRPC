// package: ident
// file: identity.proto
/* eslint-disable */
var identity_pb = require("./identity_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Identity = (function () {
  function Identity() {}
  Identity.serviceName = "ident.Identity";
  return Identity;
}());

Identity.Login = {
  methodName: "Login",
  service: Identity,
  requestStream: false,
  responseStream: false,
  requestType: identity_pb.LoginRequest,
  responseType: identity_pb.LoginReply
};

Identity.Register = {
  methodName: "Register",
  service: Identity,
  requestStream: false,
  responseStream: false,
  requestType: identity_pb.RegisterRequest,
  responseType: identity_pb.RegisterReply
};

exports.Identity = Identity;

function IdentityClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IdentityClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Identity.Login, {
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

IdentityClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Identity.Register, {
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

exports.IdentityClient = IdentityClient;

