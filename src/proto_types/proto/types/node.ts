/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

/** Server Metadata */
export interface ServerMeta {
  packageVersion: string;
  packageCommitID: string;
  gitStatus: string;
  goVersion: string;
  buildTime: string;
}

const baseServerMeta: object = {
  packageVersion: "",
  packageCommitID: "",
  gitStatus: "",
  goVersion: "",
  buildTime: "",
};

export const ServerMeta = {
  encode(
    message: ServerMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.packageVersion !== "") {
      writer.uint32(10).string(message.packageVersion);
    }
    if (message.packageCommitID !== "") {
      writer.uint32(18).string(message.packageCommitID);
    }
    if (message.gitStatus !== "") {
      writer.uint32(26).string(message.gitStatus);
    }
    if (message.goVersion !== "") {
      writer.uint32(34).string(message.goVersion);
    }
    if (message.buildTime !== "") {
      writer.uint32(42).string(message.buildTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerMeta } as ServerMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageVersion = reader.string();
          break;
        case 2:
          message.packageCommitID = reader.string();
          break;
        case 3:
          message.gitStatus = reader.string();
          break;
        case 4:
          message.goVersion = reader.string();
          break;
        case 5:
          message.buildTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerMeta {
    const message = { ...baseServerMeta } as ServerMeta;
    if (object.packageVersion !== undefined && object.packageVersion !== null) {
      message.packageVersion = String(object.packageVersion);
    } else {
      message.packageVersion = "";
    }
    if (
      object.packageCommitID !== undefined &&
      object.packageCommitID !== null
    ) {
      message.packageCommitID = String(object.packageCommitID);
    } else {
      message.packageCommitID = "";
    }
    if (object.gitStatus !== undefined && object.gitStatus !== null) {
      message.gitStatus = String(object.gitStatus);
    } else {
      message.gitStatus = "";
    }
    if (object.goVersion !== undefined && object.goVersion !== null) {
      message.goVersion = String(object.goVersion);
    } else {
      message.goVersion = "";
    }
    if (object.buildTime !== undefined && object.buildTime !== null) {
      message.buildTime = String(object.buildTime);
    } else {
      message.buildTime = "";
    }
    return message;
  },

  toJSON(message: ServerMeta): unknown {
    const obj: any = {};
    message.packageVersion !== undefined &&
      (obj.packageVersion = message.packageVersion);
    message.packageCommitID !== undefined &&
      (obj.packageCommitID = message.packageCommitID);
    message.gitStatus !== undefined && (obj.gitStatus = message.gitStatus);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    message.buildTime !== undefined && (obj.buildTime = message.buildTime);
    return obj;
  },

  fromPartial(object: DeepPartial<ServerMeta>): ServerMeta {
    const message = { ...baseServerMeta } as ServerMeta;
    if (object.packageVersion !== undefined && object.packageVersion !== null) {
      message.packageVersion = object.packageVersion;
    } else {
      message.packageVersion = "";
    }
    if (
      object.packageCommitID !== undefined &&
      object.packageCommitID !== null
    ) {
      message.packageCommitID = object.packageCommitID;
    } else {
      message.packageCommitID = "";
    }
    if (object.gitStatus !== undefined && object.gitStatus !== null) {
      message.gitStatus = object.gitStatus;
    } else {
      message.gitStatus = "";
    }
    if (object.goVersion !== undefined && object.goVersion !== null) {
      message.goVersion = object.goVersion;
    } else {
      message.goVersion = "";
    }
    if (object.buildTime !== undefined && object.buildTime !== null) {
      message.buildTime = object.buildTime;
    } else {
      message.buildTime = "";
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
