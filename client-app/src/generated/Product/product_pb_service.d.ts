// package: product
// file: product.proto

import * as product_pb from "./product_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProductCreate = {
  readonly methodName: string;
  readonly service: typeof Product;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_pb.CreateRequest;
  readonly responseType: typeof product_pb.CreateReply;
};

type ProductList = {
  readonly methodName: string;
  readonly service: typeof Product;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_pb.ListRequest;
  readonly responseType: typeof product_pb.ListReply;
};

export class Product {
  static readonly serviceName: string;
  static readonly Create: ProductCreate;
  static readonly List: ProductList;
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

export class ProductClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  create(
    requestMessage: product_pb.CreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_pb.CreateReply|null) => void
  ): UnaryResponse;
  create(
    requestMessage: product_pb.CreateRequest,
    callback: (error: ServiceError|null, responseMessage: product_pb.CreateReply|null) => void
  ): UnaryResponse;
  list(
    requestMessage: product_pb.ListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_pb.ListReply|null) => void
  ): UnaryResponse;
  list(
    requestMessage: product_pb.ListRequest,
    callback: (error: ServiceError|null, responseMessage: product_pb.ListReply|null) => void
  ): UnaryResponse;
}

