/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "iotexrpc";

/**
 * To compile the proto, run:
 *      protoc -I. -I ./../types --go_out=plugins=grpc:$GOPATH/src *.proto
 */

export enum MessageType {
  UNKNOWN = 0,
  ACTION = 1,
  BLOCK = 2,
  CONSENSUS = 3,
  BLOCK_REQUEST = 4,
  TEST = 10001,
  UNRECOGNIZED = -1,
}

export function messageTypeFromJSON(object: any): MessageType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MessageType.UNKNOWN;
    case 1:
    case "ACTION":
      return MessageType.ACTION;
    case 2:
    case "BLOCK":
      return MessageType.BLOCK;
    case 3:
    case "CONSENSUS":
      return MessageType.CONSENSUS;
    case 4:
    case "BLOCK_REQUEST":
      return MessageType.BLOCK_REQUEST;
    case 10001:
    case "TEST":
      return MessageType.TEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageType.UNRECOGNIZED;
  }
}

export function messageTypeToJSON(object: MessageType): string {
  switch (object) {
    case MessageType.UNKNOWN:
      return "UNKNOWN";
    case MessageType.ACTION:
      return "ACTION";
    case MessageType.BLOCK:
      return "BLOCK";
    case MessageType.CONSENSUS:
      return "CONSENSUS";
    case MessageType.BLOCK_REQUEST:
      return "BLOCK_REQUEST";
    case MessageType.TEST:
      return "TEST";
    default:
      return "UNKNOWN";
  }
}

export interface BlockSync {
  start: number;
  end: number;
}

export interface BroadcastMsg {
  chainId: number;
  msgType: MessageType;
  msgBody: Uint8Array;
  peerId: string;
  timestamp: Date | undefined;
}

export interface UnicastMsg {
  chainId: number;
  addr: string;
  msgType: MessageType;
  msgBody: Uint8Array;
  peerId: string;
  timestamp: Date | undefined;
}

const baseBlockSync: object = { start: 0, end: 0 };

export const BlockSync = {
  encode(
    message: BlockSync,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(16).uint64(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(24).uint64(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockSync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockSync } as BlockSync;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.end = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockSync {
    const message = { ...baseBlockSync } as BlockSync;
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Number(object.end);
    } else {
      message.end = 0;
    }
    return message;
  },

  toJSON(message: BlockSync): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockSync>): BlockSync {
    const message = { ...baseBlockSync } as BlockSync;
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    } else {
      message.end = 0;
    }
    return message;
  },
};

const baseBroadcastMsg: object = { chainId: 0, msgType: 0, peerId: "" };

export const BroadcastMsg = {
  encode(
    message: BroadcastMsg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }
    if (message.msgType !== 0) {
      writer.uint32(16).int32(message.msgType);
    }
    if (message.msgBody.length !== 0) {
      writer.uint32(26).bytes(message.msgBody);
    }
    if (message.peerId !== "") {
      writer.uint32(34).string(message.peerId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBroadcastMsg } as BroadcastMsg;
    message.msgBody = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;
        case 2:
          message.msgType = reader.int32() as any;
          break;
        case 3:
          message.msgBody = reader.bytes();
          break;
        case 4:
          message.peerId = reader.string();
          break;
        case 5:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BroadcastMsg {
    const message = { ...baseBroadcastMsg } as BroadcastMsg;
    message.msgBody = new Uint8Array();
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Number(object.chainId);
    } else {
      message.chainId = 0;
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = messageTypeFromJSON(object.msgType);
    } else {
      message.msgType = 0;
    }
    if (object.msgBody !== undefined && object.msgBody !== null) {
      message.msgBody = bytesFromBase64(object.msgBody);
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    return message;
  },

  toJSON(message: BroadcastMsg): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.msgType !== undefined &&
      (obj.msgType = messageTypeToJSON(message.msgType));
    message.msgBody !== undefined &&
      (obj.msgBody = base64FromBytes(
        message.msgBody !== undefined ? message.msgBody : new Uint8Array()
      ));
    message.peerId !== undefined && (obj.peerId = message.peerId);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BroadcastMsg>): BroadcastMsg {
    const message = { ...baseBroadcastMsg } as BroadcastMsg;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = 0;
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = object.msgType;
    } else {
      message.msgType = 0;
    }
    if (object.msgBody !== undefined && object.msgBody !== null) {
      message.msgBody = object.msgBody;
    } else {
      message.msgBody = new Uint8Array();
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
};

const baseUnicastMsg: object = { chainId: 0, addr: "", msgType: 0, peerId: "" };

export const UnicastMsg = {
  encode(
    message: UnicastMsg,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== 0) {
      writer.uint32(8).uint32(message.chainId);
    }
    if (message.addr !== "") {
      writer.uint32(18).string(message.addr);
    }
    if (message.msgType !== 0) {
      writer.uint32(24).int32(message.msgType);
    }
    if (message.msgBody.length !== 0) {
      writer.uint32(34).bytes(message.msgBody);
    }
    if (message.peerId !== "") {
      writer.uint32(42).string(message.peerId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnicastMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnicastMsg } as UnicastMsg;
    message.msgBody = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.uint32();
          break;
        case 2:
          message.addr = reader.string();
          break;
        case 3:
          message.msgType = reader.int32() as any;
          break;
        case 4:
          message.msgBody = reader.bytes();
          break;
        case 5:
          message.peerId = reader.string();
          break;
        case 6:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnicastMsg {
    const message = { ...baseUnicastMsg } as UnicastMsg;
    message.msgBody = new Uint8Array();
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = Number(object.chainId);
    } else {
      message.chainId = 0;
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = messageTypeFromJSON(object.msgType);
    } else {
      message.msgType = 0;
    }
    if (object.msgBody !== undefined && object.msgBody !== null) {
      message.msgBody = bytesFromBase64(object.msgBody);
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    return message;
  },

  toJSON(message: UnicastMsg): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.addr !== undefined && (obj.addr = message.addr);
    message.msgType !== undefined &&
      (obj.msgType = messageTypeToJSON(message.msgType));
    message.msgBody !== undefined &&
      (obj.msgBody = base64FromBytes(
        message.msgBody !== undefined ? message.msgBody : new Uint8Array()
      ));
    message.peerId !== undefined && (obj.peerId = message.peerId);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<UnicastMsg>): UnicastMsg {
    const message = { ...baseUnicastMsg } as UnicastMsg;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = 0;
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    if (object.msgType !== undefined && object.msgType !== null) {
      message.msgType = object.msgType;
    } else {
      message.msgType = 0;
    }
    if (object.msgBody !== undefined && object.msgBody !== null) {
      message.msgBody = object.msgBody;
    } else {
      message.msgBody = new Uint8Array();
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
