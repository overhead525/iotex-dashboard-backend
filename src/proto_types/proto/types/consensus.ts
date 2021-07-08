/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Block } from "../../proto/types/blockchain";
import { Endorsement } from "../../proto/types/endorsement";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

export interface BlockProposal {
  block: Block | undefined;
  endorsements: Endorsement[];
}

export interface ConsensusVote {
  blockHash: Uint8Array;
  topic: ConsensusVote_Topic;
}

export enum ConsensusVote_Topic {
  PROPOSAL = 0,
  LOCK = 1,
  COMMIT = 2,
  UNRECOGNIZED = -1,
}

export function consensusVote_TopicFromJSON(object: any): ConsensusVote_Topic {
  switch (object) {
    case 0:
    case "PROPOSAL":
      return ConsensusVote_Topic.PROPOSAL;
    case 1:
    case "LOCK":
      return ConsensusVote_Topic.LOCK;
    case 2:
    case "COMMIT":
      return ConsensusVote_Topic.COMMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConsensusVote_Topic.UNRECOGNIZED;
  }
}

export function consensusVote_TopicToJSON(object: ConsensusVote_Topic): string {
  switch (object) {
    case ConsensusVote_Topic.PROPOSAL:
      return "PROPOSAL";
    case ConsensusVote_Topic.LOCK:
      return "LOCK";
    case ConsensusVote_Topic.COMMIT:
      return "COMMIT";
    default:
      return "UNKNOWN";
  }
}

export interface ConsensusMessage {
  height: number;
  endorsement: Endorsement | undefined;
  blockProposal: BlockProposal | undefined;
  vote: ConsensusVote | undefined;
}

const baseBlockProposal: object = {};

export const BlockProposal = {
  encode(
    message: BlockProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.endorsements) {
      Endorsement.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockProposal } as BlockProposal;
    message.endorsements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 2:
          message.endorsements.push(
            Endorsement.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockProposal {
    const message = { ...baseBlockProposal } as BlockProposal;
    message.endorsements = [];
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromJSON(object.block);
    } else {
      message.block = undefined;
    }
    if (object.endorsements !== undefined && object.endorsements !== null) {
      for (const e of object.endorsements) {
        message.endorsements.push(Endorsement.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BlockProposal): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    if (message.endorsements) {
      obj.endorsements = message.endorsements.map((e) =>
        e ? Endorsement.toJSON(e) : undefined
      );
    } else {
      obj.endorsements = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockProposal>): BlockProposal {
    const message = { ...baseBlockProposal } as BlockProposal;
    message.endorsements = [];
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    } else {
      message.block = undefined;
    }
    if (object.endorsements !== undefined && object.endorsements !== null) {
      for (const e of object.endorsements) {
        message.endorsements.push(Endorsement.fromPartial(e));
      }
    }
    return message;
  },
};

const baseConsensusVote: object = { topic: 0 };

export const ConsensusVote = {
  encode(
    message: ConsensusVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHash.length !== 0) {
      writer.uint32(10).bytes(message.blockHash);
    }
    if (message.topic !== 0) {
      writer.uint32(16).int32(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusVote } as ConsensusVote;
    message.blockHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHash = reader.bytes();
          break;
        case 2:
          message.topic = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusVote {
    const message = { ...baseConsensusVote } as ConsensusVote;
    message.blockHash = new Uint8Array();
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = bytesFromBase64(object.blockHash);
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = consensusVote_TopicFromJSON(object.topic);
    } else {
      message.topic = 0;
    }
    return message;
  },

  toJSON(message: ConsensusVote): unknown {
    const obj: any = {};
    message.blockHash !== undefined &&
      (obj.blockHash = base64FromBytes(
        message.blockHash !== undefined ? message.blockHash : new Uint8Array()
      ));
    message.topic !== undefined &&
      (obj.topic = consensusVote_TopicToJSON(message.topic));
    return obj;
  },

  fromPartial(object: DeepPartial<ConsensusVote>): ConsensusVote {
    const message = { ...baseConsensusVote } as ConsensusVote;
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = object.blockHash;
    } else {
      message.blockHash = new Uint8Array();
    }
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    } else {
      message.topic = 0;
    }
    return message;
  },
};

const baseConsensusMessage: object = { height: 0 };

export const ConsensusMessage = {
  encode(
    message: ConsensusMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.endorsement !== undefined) {
      Endorsement.encode(
        message.endorsement,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.blockProposal !== undefined) {
      BlockProposal.encode(
        message.blockProposal,
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.vote !== undefined) {
      ConsensusVote.encode(message.vote, writer.uint32(810).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensusMessage } as ConsensusMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.endorsement = Endorsement.decode(reader, reader.uint32());
          break;
        case 100:
          message.blockProposal = BlockProposal.decode(reader, reader.uint32());
          break;
        case 101:
          message.vote = ConsensusVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsensusMessage {
    const message = { ...baseConsensusMessage } as ConsensusMessage;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.endorsement !== undefined && object.endorsement !== null) {
      message.endorsement = Endorsement.fromJSON(object.endorsement);
    } else {
      message.endorsement = undefined;
    }
    if (object.blockProposal !== undefined && object.blockProposal !== null) {
      message.blockProposal = BlockProposal.fromJSON(object.blockProposal);
    } else {
      message.blockProposal = undefined;
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = ConsensusVote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },

  toJSON(message: ConsensusMessage): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.endorsement !== undefined &&
      (obj.endorsement = message.endorsement
        ? Endorsement.toJSON(message.endorsement)
        : undefined);
    message.blockProposal !== undefined &&
      (obj.blockProposal = message.blockProposal
        ? BlockProposal.toJSON(message.blockProposal)
        : undefined);
    message.vote !== undefined &&
      (obj.vote = message.vote
        ? ConsensusVote.toJSON(message.vote)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ConsensusMessage>): ConsensusMessage {
    const message = { ...baseConsensusMessage } as ConsensusMessage;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.endorsement !== undefined && object.endorsement !== null) {
      message.endorsement = Endorsement.fromPartial(object.endorsement);
    } else {
      message.endorsement = undefined;
    }
    if (object.blockProposal !== undefined && object.blockProposal !== null) {
      message.blockProposal = BlockProposal.fromPartial(object.blockProposal);
    } else {
      message.blockProposal = undefined;
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = ConsensusVote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
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
