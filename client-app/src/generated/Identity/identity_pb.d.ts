// package: ident
// file: identity.proto

import * as jspb from "google-protobuf";

export class LoginReply extends jspb.Message {
  getDisplayname(): string;
  setDisplayname(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    displayname: string,
    token: string,
    username: string,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getDisplayname(): string;
  setDisplayname(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    displayname: string,
    username: string,
    email: string,
    password: string,
  }
}

export class RegisterReply extends jspb.Message {
  getDisplayname(): string;
  setDisplayname(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterReply.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterReply): RegisterReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterReply;
  static deserializeBinaryFromReader(message: RegisterReply, reader: jspb.BinaryReader): RegisterReply;
}

export namespace RegisterReply {
  export type AsObject = {
    displayname: string,
    token: string,
    username: string,
  }
}

export class IdentityItem extends jspb.Message {
  getDisplayname(): string;
  setDisplayname(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityItem.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityItem): IdentityItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityItem;
  static deserializeBinaryFromReader(message: IdentityItem, reader: jspb.BinaryReader): IdentityItem;
}

export namespace IdentityItem {
  export type AsObject = {
    displayname: string,
    username: string,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListReply extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<IdentityItem>;
  setItemsList(value: Array<IdentityItem>): void;
  addItems(value?: IdentityItem, index?: number): IdentityItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListReply): ListReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReply;
  static deserializeBinaryFromReader(message: ListReply, reader: jspb.BinaryReader): ListReply;
}

export namespace ListReply {
  export type AsObject = {
    itemsList: Array<IdentityItem.AsObject>,
  }
}

