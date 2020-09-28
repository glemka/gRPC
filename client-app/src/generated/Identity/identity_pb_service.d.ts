// package: ident
// file: identity.proto

import * as identity_pb from "./identity_pb";
import {grpc} from "@improbable-eng/grpc-web";

type IdentityLogin = {
  readonly methodName: string;
  readonly service: typeof Identity;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof identity_pb.LoginRequest;
  readonly responseType: typeof identity_pb.LoginReply;
};

type IdentityRegister = {
  readonly methodName: string;
  readonly service: typeof Identity;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof identity_pb.RegisterRequest;
  readonly responseType: typeof identity_pb.RegisterReply;
};

type IdentityList = {
  readonly methodName: string;
  readonly service: typeof Identity;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof identity_pb.ListRequest;
  readonly responseType: typeof identity_pb.ListReply;
};

export class Identity {
  static readonly serviceName: string;
  static readonly Login: IdentityLogin;
  static readonly Register: IdentityRegister;
  static readonly List: IdentityList;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class IdentityClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: identity_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: identity_pb.LoginReply|null) => void
  ): UnaryResponse;
  login(
    requestMessage: identity_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: identity_pb.LoginReply|null) => void
  ): UnaryResponse;
  register(
    requestMessage: identity_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: identity_pb.RegisterReply|null) => void
  ): UnaryResponse;
  register(
    requestMessage: identity_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: identity_pb.RegisterReply|null) => void
  ): UnaryResponse;
  list(
    requestMessage: identity_pb.ListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: identity_pb.ListReply|null) => void
  ): UnaryResponse;
  list(
    requestMessage: identity_pb.ListRequest,
    callback: (error: ServiceError|null, responseMessage: identity_pb.ListReply|null) => void
  ): UnaryResponse;
}

