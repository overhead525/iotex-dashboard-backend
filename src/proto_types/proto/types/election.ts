/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "iotextypes";

export interface ElectionBucket {
  voter: Uint8Array;
  candidate: Uint8Array;
  amount: Uint8Array;
  startTime: Date | undefined;
  duration: Duration | undefined;
  decay: boolean;
}

const baseElectionBucket: object = { decay: false };

export const ElectionBucket = {
  encode(
    message: ElectionBucket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voter.length !== 0) {
      writer.uint32(10).bytes(message.voter);
    }
    if (message.candidate.length !== 0) {
      writer.uint32(18).bytes(message.candidate);
    }
    if (message.amount.length !== 0) {
      writer.uint32(26).bytes(message.amount);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (message.decay === true) {
      writer.uint32(48).bool(message.decay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ElectionBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseElectionBucket } as ElectionBucket;
    message.voter = new Uint8Array();
    message.candidate = new Uint8Array();
    message.amount = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.bytes();
          break;
        case 2:
          message.candidate = reader.bytes();
          break;
        case 3:
          message.amount = reader.bytes();
          break;
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.decay = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ElectionBucket {
    const message = { ...baseElectionBucket } as ElectionBucket;
    message.voter = new Uint8Array();
    message.candidate = new Uint8Array();
    message.amount = new Uint8Array();
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = bytesFromBase64(object.voter);
    }
    if (object.candidate !== undefined && object.candidate !== null) {
      message.candidate = bytesFromBase64(object.candidate);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = bytesFromBase64(object.amount);
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime);
    } else {
      message.startTime = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromJSON(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.decay !== undefined && object.decay !== null) {
      message.decay = Boolean(object.decay);
    } else {
      message.decay = false;
    }
    return message;
  },

  toJSON(message: ElectionBucket): unknown {
    const obj: any = {};
    message.voter !== undefined &&
      (obj.voter = base64FromBytes(
        message.voter !== undefined ? message.voter : new Uint8Array()
      ));
    message.candidate !== undefined &&
      (obj.candidate = base64FromBytes(
        message.candidate !== undefined ? message.candidate : new Uint8Array()
      ));
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(
        message.amount !== undefined ? message.amount : new Uint8Array()
      ));
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.decay !== undefined && (obj.decay = message.decay);
    return obj;
  },

  fromPartial(object: DeepPartial<ElectionBucket>): ElectionBucket {
    const message = { ...baseElectionBucket } as ElectionBucket;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = new Uint8Array();
    }
    if (object.candidate !== undefined && object.candidate !== null) {
      message.candidate = object.candidate;
    } else {
      message.candidate = new Uint8Array();
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = new Uint8Array();
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime;
    } else {
      message.startTime = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    } else {
      message.duration = undefined;
    }
    if (object.decay !== undefined && object.decay !== null) {
      message.decay = object.decay;
    } else {
      message.decay = false;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
