// package: product
// file: product.proto

import * as product_pb from "./product_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProductSayHello = {
  readonly methodName: string;
  readonly service: typeof Product;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof product_pb.HelloRequest;
  readonly responseType: typeof product_pb.HelloReply;
};

export class Product {
  static readonly serviceName: string;
  static readonly SayHello: ProductSayHello;
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
  sayHello(
    requestMessage: product_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: product_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: product_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: product_pb.HelloReply|null) => void
  ): UnaryResponse;
}

