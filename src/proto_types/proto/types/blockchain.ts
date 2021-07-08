/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Endorsement } from "../../proto/types/endorsement";
import { Action, Receipt } from "../../proto/types/action";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

/** header of a block */
export interface BlockHeader {
  core: BlockHeaderCore | undefined;
  producerPubkey: Uint8Array;
  signature: Uint8Array;
}

export interface BlockHeaderCore {
  version: number;
  height: number;
  timestamp: Date | undefined;
  prevBlockHash: Uint8Array;
  txRoot: Uint8Array;
  deltaStateDigest: Uint8Array;
  receiptRoot: Uint8Array;
  logsBloom: Uint8Array;
}

/** footer of a block */
export interface BlockFooter {
  endorsements: Endorsement[];
  timestamp: Date | undefined;
}

/** body of a block */
export interface BlockBody {
  actions: Action[];
}

/**
 * block consists of header followed by transactions
 * hash of current block can be computed from header hence not stored
 */
export interface Block {
  header: BlockHeader | undefined;
  body: BlockBody | undefined;
  footer: BlockFooter | undefined;
}

/** Receipts consists of a collection of recepit */
export interface Receipts {
  receipts: Receipt[];
}

export interface EpochData {
  num: number;
  height: number;
  gravityChainStartHeight: number;
}

/** Blockchain Metadata */
export interface ChainMeta {
  height: number;
  numActions: number;
  tps: number;
  epoch: EpochData | undefined;
  tpsFloat: number;
  chainID: number;
}

/** Block Metadata */
export interface BlockMeta {
  hash: string;
  height: number;
  timestamp: Date | undefined;
  numActions: number;
  producerAddress: string;
  transferAmount: string;
  txRoot: string;
  receiptRoot: string;
  deltaStateDigest: string;
  logsBloom: string;
  previousBlockHash: string;
  gasLimit: number;
  gasUsed: number;
}

/** BlockIdentifier Metadata */
export interface BlockIdentifier {
  hash: string;
  height: number;
}

/** Account Metadata */
export interface AccountMeta {
  address: string;
  balance: string;
  nonce: number;
  pendingNonce: number;
  numActions: number;
  isContract: boolean;
  contractByteCode: Uint8Array;
}

export interface BlockStore {
  block: Block | undefined;
  receipts: Receipt[];
}

export interface BlockStores {
  blockStores: BlockStore[];
}

const baseBlockHeader: object = {};

export const BlockHeader = {
  encode(
    message: BlockHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.core !== undefined) {
      BlockHeaderCore.encode(message.core, writer.uint32(10).fork()).ldelim();
    }
    if (message.producerPubkey.length !== 0) {
      writer.uint32(18).bytes(message.producerPubkey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockHeader } as BlockHeader;
    message.producerPubkey = new Uint8Array();
    message.signature = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.core = BlockHeaderCore.decode(reader, reader.uint32());
          break;
        case 2:
          message.producerPubkey = reader.bytes();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockHeader {
    const message = { ...baseBlockHeader } as BlockHeader;
    message.producerPubkey = new Uint8Array();
    message.signature = new Uint8Array();
    if (object.core !== undefined && object.core !== null) {
      message.core = BlockHeaderCore.fromJSON(object.core);
    } else {
      message.core = undefined;
    }
    if (object.producerPubkey !== undefined && object.producerPubkey !== null) {
      message.producerPubkey = bytesFromBase64(object.producerPubkey);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },

  toJSON(message: BlockHeader): unknown {
    const obj: any = {};
    message.core !== undefined &&
      (obj.core = message.core
        ? BlockHeaderCore.toJSON(message.core)
        : undefined);
    message.producerPubkey !== undefined &&
      (obj.producerPubkey = base64FromBytes(
        message.producerPubkey !== undefined
          ? message.producerPubkey
          : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<BlockHeader>): BlockHeader {
    const message = { ...baseBlockHeader } as BlockHeader;
    if (object.core !== undefined && object.core !== null) {
      message.core = BlockHeaderCore.fromPartial(object.core);
    } else {
      message.core = undefined;
    }
    if (object.producerPubkey !== undefined && object.producerPubkey !== null) {
      message.producerPubkey = object.producerPubkey;
    } else {
      message.producerPubkey = new Uint8Array();
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    } else {
      message.signature = new Uint8Array();
    }
    return message;
  },
};

const baseBlockHeaderCore: object = { version: 0, height: 0 };

export const BlockHeaderCore = {
  encode(
    message: BlockHeaderCore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.prevBlockHash.length !== 0) {
      writer.uint32(34).bytes(message.prevBlockHash);
    }
    if (message.txRoot.length !== 0) {
      writer.uint32(42).bytes(message.txRoot);
    }
    if (message.deltaStateDigest.length !== 0) {
      writer.uint32(50).bytes(message.deltaStateDigest);
    }
    if (message.receiptRoot.length !== 0) {
      writer.uint32(58).bytes(message.receiptRoot);
    }
    if (message.logsBloom.length !== 0) {
      writer.uint32(66).bytes(message.logsBloom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeaderCore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockHeaderCore } as BlockHeaderCore;
    message.prevBlockHash = new Uint8Array();
    message.txRoot = new Uint8Array();
    message.deltaStateDigest = new Uint8Array();
    message.receiptRoot = new Uint8Array();
    message.logsBloom = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.prevBlockHash = reader.bytes();
          break;
        case 5:
          message.txRoot = reader.bytes();
          break;
        case 6:
          message.deltaStateDigest = reader.bytes();
          break;
        case 7:
          message.receiptRoot = reader.bytes();
          break;
        case 8:
          message.logsBloom = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockHeaderCore {
    const message = { ...baseBlockHeaderCore } as BlockHeaderCore;
    message.prevBlockHash = new Uint8Array();
    message.txRoot = new Uint8Array();
    message.deltaStateDigest = new Uint8Array();
    message.receiptRoot = new Uint8Array();
    message.logsBloom = new Uint8Array();
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version);
    } else {
      message.version = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.prevBlockHash !== undefined && object.prevBlockHash !== null) {
      message.prevBlockHash = bytesFromBase64(object.prevBlockHash);
    }
    if (object.txRoot !== undefined && object.txRoot !== null) {
      message.txRoot = bytesFromBase64(object.txRoot);
    }
    if (
      object.deltaStateDigest !== undefined &&
      object.deltaStateDigest !== null
    ) {
      message.deltaStateDigest = bytesFromBase64(object.deltaStateDigest);
    }
    if (object.receiptRoot !== undefined && object.receiptRoot !== null) {
      message.receiptRoot = bytesFromBase64(object.receiptRoot);
    }
    if (object.logsBloom !== undefined && object.logsBloom !== null) {
      message.logsBloom = bytesFromBase64(object.logsBloom);
    }
    return message;
  },

  toJSON(message: BlockHeaderCore): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.height !== undefined && (obj.height = message.height);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.prevBlockHash !== undefined &&
      (obj.prevBlockHash = base64FromBytes(
        message.prevBlockHash !== undefined
          ? message.prevBlockHash
          : new Uint8Array()
      ));
    message.txRoot !== undefined &&
      (obj.txRoot = base64FromBytes(
        message.txRoot !== undefined ? message.txRoot : new Uint8Array()
      ));
    message.deltaStateDigest !== undefined &&
      (obj.deltaStateDigest = base64FromBytes(
        message.deltaStateDigest !== undefined
          ? message.deltaStateDigest
          : new Uint8Array()
      ));
    message.receiptRoot !== undefined &&
      (obj.receiptRoot = base64FromBytes(
        message.receiptRoot !== undefined
          ? message.receiptRoot
          : new Uint8Array()
      ));
    message.logsBloom !== undefined &&
      (obj.logsBloom = base64FromBytes(
        message.logsBloom !== undefined ? message.logsBloom : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<BlockHeaderCore>): BlockHeaderCore {
    const message = { ...baseBlockHeaderCore } as BlockHeaderCore;
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    } else {
      message.version = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.prevBlockHash !== undefined && object.prevBlockHash !== null) {
      message.prevBlockHash = object.prevBlockHash;
    } else {
      message.prevBlockHash = new Uint8Array();
    }
    if (object.txRoot !== undefined && object.txRoot !== null) {
      message.txRoot = object.txRoot;
    } else {
      message.txRoot = new Uint8Array();
    }
    if (
      object.deltaStateDigest !== undefined &&
      object.deltaStateDigest !== null
    ) {
      message.deltaStateDigest = object.deltaStateDigest;
    } else {
      message.deltaStateDigest = new Uint8Array();
    }
    if (object.receiptRoot !== undefined && object.receiptRoot !== null) {
      message.receiptRoot = object.receiptRoot;
    } else {
      message.receiptRoot = new Uint8Array();
    }
    if (object.logsBloom !== undefined && object.logsBloom !== null) {
      message.logsBloom = object.logsBloom;
    } else {
      message.logsBloom = new Uint8Array();
    }
    return message;
  },
};

const baseBlockFooter: object = {};

export const BlockFooter = {
  encode(
    message: BlockFooter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.endorsements) {
      Endorsement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockFooter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockFooter } as BlockFooter;
    message.endorsements = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endorsements.push(
            Endorsement.decode(reader, reader.uint32())
          );
          break;
        case 2:
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

  fromJSON(object: any): BlockFooter {
    const message = { ...baseBlockFooter } as BlockFooter;
    message.endorsements = [];
    if (object.endorsements !== undefined && object.endorsements !== null) {
      for (const e of object.endorsements) {
        message.endorsements.push(Endorsement.fromJSON(e));
      }
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    return message;
  },

  toJSON(message: BlockFooter): unknown {
    const obj: any = {};
    if (message.endorsements) {
      obj.endorsements = message.endorsements.map((e) =>
        e ? Endorsement.toJSON(e) : undefined
      );
    } else {
      obj.endorsements = [];
    }
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BlockFooter>): BlockFooter {
    const message = { ...baseBlockFooter } as BlockFooter;
    message.endorsements = [];
    if (object.endorsements !== undefined && object.endorsements !== null) {
      for (const e of object.endorsements) {
        message.endorsements.push(Endorsement.fromPartial(e));
      }
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
};

const baseBlockBody: object = {};

export const BlockBody = {
  encode(
    message: BlockBody,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockBody } as BlockBody;
    message.actions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockBody {
    const message = { ...baseBlockBody } as BlockBody;
    message.actions = [];
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BlockBody): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockBody>): BlockBody {
    const message = { ...baseBlockBody } as BlockBody;
    message.actions = [];
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBlock: object = {};

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BlockHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.body !== undefined) {
      BlockBody.encode(message.body, writer.uint32(18).fork()).ldelim();
    }
    if (message.footer !== undefined) {
      BlockFooter.encode(message.footer, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlock } as Block;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = BlockHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.body = BlockBody.decode(reader, reader.uint32());
          break;
        case 3:
          message.footer = BlockFooter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    const message = { ...baseBlock } as Block;
    if (object.header !== undefined && object.header !== null) {
      message.header = BlockHeader.fromJSON(object.header);
    } else {
      message.header = undefined;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = BlockBody.fromJSON(object.body);
    } else {
      message.body = undefined;
    }
    if (object.footer !== undefined && object.footer !== null) {
      message.footer = BlockFooter.fromJSON(object.footer);
    } else {
      message.footer = undefined;
    }
    return message;
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header
        ? BlockHeader.toJSON(message.header)
        : undefined);
    message.body !== undefined &&
      (obj.body = message.body ? BlockBody.toJSON(message.body) : undefined);
    message.footer !== undefined &&
      (obj.footer = message.footer
        ? BlockFooter.toJSON(message.footer)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = { ...baseBlock } as Block;
    if (object.header !== undefined && object.header !== null) {
      message.header = BlockHeader.fromPartial(object.header);
    } else {
      message.header = undefined;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = BlockBody.fromPartial(object.body);
    } else {
      message.body = undefined;
    }
    if (object.footer !== undefined && object.footer !== null) {
      message.footer = BlockFooter.fromPartial(object.footer);
    } else {
      message.footer = undefined;
    }
    return message;
  },
};

const baseReceipts: object = {};

export const Receipts = {
  encode(
    message: Receipts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Receipts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceipts } as Receipts;
    message.receipts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receipts.push(Receipt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Receipts {
    const message = { ...baseReceipts } as Receipts;
    message.receipts = [];
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(Receipt.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Receipts): unknown {
    const obj: any = {};
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) =>
        e ? Receipt.toJSON(e) : undefined
      );
    } else {
      obj.receipts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Receipts>): Receipts {
    const message = { ...baseReceipts } as Receipts;
    message.receipts = [];
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(Receipt.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEpochData: object = { num: 0, height: 0, gravityChainStartHeight: 0 };

export const EpochData = {
  encode(
    message: EpochData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.num !== 0) {
      writer.uint32(8).uint64(message.num);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.gravityChainStartHeight !== 0) {
      writer.uint32(24).uint64(message.gravityChainStartHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEpochData } as EpochData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.num = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.gravityChainStartHeight = longToNumber(
            reader.uint64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochData {
    const message = { ...baseEpochData } as EpochData;
    if (object.num !== undefined && object.num !== null) {
      message.num = Number(object.num);
    } else {
      message.num = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (
      object.gravityChainStartHeight !== undefined &&
      object.gravityChainStartHeight !== null
    ) {
      message.gravityChainStartHeight = Number(object.gravityChainStartHeight);
    } else {
      message.gravityChainStartHeight = 0;
    }
    return message;
  },

  toJSON(message: EpochData): unknown {
    const obj: any = {};
    message.num !== undefined && (obj.num = message.num);
    message.height !== undefined && (obj.height = message.height);
    message.gravityChainStartHeight !== undefined &&
      (obj.gravityChainStartHeight = message.gravityChainStartHeight);
    return obj;
  },

  fromPartial(object: DeepPartial<EpochData>): EpochData {
    const message = { ...baseEpochData } as EpochData;
    if (object.num !== undefined && object.num !== null) {
      message.num = object.num;
    } else {
      message.num = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (
      object.gravityChainStartHeight !== undefined &&
      object.gravityChainStartHeight !== null
    ) {
      message.gravityChainStartHeight = object.gravityChainStartHeight;
    } else {
      message.gravityChainStartHeight = 0;
    }
    return message;
  },
};

const baseChainMeta: object = {
  height: 0,
  numActions: 0,
  tps: 0,
  tpsFloat: 0,
  chainID: 0,
};

export const ChainMeta = {
  encode(
    message: ChainMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.numActions !== 0) {
      writer.uint32(16).int64(message.numActions);
    }
    if (message.tps !== 0) {
      writer.uint32(24).int64(message.tps);
    }
    if (message.epoch !== undefined) {
      EpochData.encode(message.epoch, writer.uint32(34).fork()).ldelim();
    }
    if (message.tpsFloat !== 0) {
      writer.uint32(45).float(message.tpsFloat);
    }
    if (message.chainID !== 0) {
      writer.uint32(48).uint32(message.chainID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChainMeta } as ChainMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.numActions = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.tps = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.epoch = EpochData.decode(reader, reader.uint32());
          break;
        case 5:
          message.tpsFloat = reader.float();
          break;
        case 6:
          message.chainID = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainMeta {
    const message = { ...baseChainMeta } as ChainMeta;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.numActions !== undefined && object.numActions !== null) {
      message.numActions = Number(object.numActions);
    } else {
      message.numActions = 0;
    }
    if (object.tps !== undefined && object.tps !== null) {
      message.tps = Number(object.tps);
    } else {
      message.tps = 0;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = EpochData.fromJSON(object.epoch);
    } else {
      message.epoch = undefined;
    }
    if (object.tpsFloat !== undefined && object.tpsFloat !== null) {
      message.tpsFloat = Number(object.tpsFloat);
    } else {
      message.tpsFloat = 0;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = Number(object.chainID);
    } else {
      message.chainID = 0;
    }
    return message;
  },

  toJSON(message: ChainMeta): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.numActions !== undefined && (obj.numActions = message.numActions);
    message.tps !== undefined && (obj.tps = message.tps);
    message.epoch !== undefined &&
      (obj.epoch = message.epoch ? EpochData.toJSON(message.epoch) : undefined);
    message.tpsFloat !== undefined && (obj.tpsFloat = message.tpsFloat);
    message.chainID !== undefined && (obj.chainID = message.chainID);
    return obj;
  },

  fromPartial(object: DeepPartial<ChainMeta>): ChainMeta {
    const message = { ...baseChainMeta } as ChainMeta;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.numActions !== undefined && object.numActions !== null) {
      message.numActions = object.numActions;
    } else {
      message.numActions = 0;
    }
    if (object.tps !== undefined && object.tps !== null) {
      message.tps = object.tps;
    } else {
      message.tps = 0;
    }
    if (object.epoch !== undefined && object.epoch !== null) {
      message.epoch = EpochData.fromPartial(object.epoch);
    } else {
      message.epoch = undefined;
    }
    if (object.tpsFloat !== undefined && object.tpsFloat !== null) {
      message.tpsFloat = object.tpsFloat;
    } else {
      message.tpsFloat = 0;
    }
    if (object.chainID !== undefined && object.chainID !== null) {
      message.chainID = object.chainID;
    } else {
      message.chainID = 0;
    }
    return message;
  },
};

const baseBlockMeta: object = {
  hash: "",
  height: 0,
  numActions: 0,
  producerAddress: "",
  transferAmount: "",
  txRoot: "",
  receiptRoot: "",
  deltaStateDigest: "",
  logsBloom: "",
  previousBlockHash: "",
  gasLimit: 0,
  gasUsed: 0,
};

export const BlockMeta = {
  encode(
    message: BlockMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.numActions !== 0) {
      writer.uint32(32).int64(message.numActions);
    }
    if (message.producerAddress !== "") {
      writer.uint32(42).string(message.producerAddress);
    }
    if (message.transferAmount !== "") {
      writer.uint32(50).string(message.transferAmount);
    }
    if (message.txRoot !== "") {
      writer.uint32(58).string(message.txRoot);
    }
    if (message.receiptRoot !== "") {
      writer.uint32(66).string(message.receiptRoot);
    }
    if (message.deltaStateDigest !== "") {
      writer.uint32(74).string(message.deltaStateDigest);
    }
    if (message.logsBloom !== "") {
      writer.uint32(82).string(message.logsBloom);
    }
    if (message.previousBlockHash !== "") {
      writer.uint32(90).string(message.previousBlockHash);
    }
    if (message.gasLimit !== 0) {
      writer.uint32(96).uint64(message.gasLimit);
    }
    if (message.gasUsed !== 0) {
      writer.uint32(104).uint64(message.gasUsed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockMeta } as BlockMeta;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.numActions = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.producerAddress = reader.string();
          break;
        case 6:
          message.transferAmount = reader.string();
          break;
        case 7:
          message.txRoot = reader.string();
          break;
        case 8:
          message.receiptRoot = reader.string();
          break;
        case 9:
          message.deltaStateDigest = reader.string();
          break;
        case 10:
          message.logsBloom = reader.string();
          break;
        case 11:
          message.previousBlockHash = reader.string();
          break;
        case 12:
          message.gasLimit = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.gasUsed = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockMeta {
    const message = { ...baseBlockMeta } as BlockMeta;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.numActions !== undefined && object.numActions !== null) {
      message.numActions = Number(object.numActions);
    } else {
      message.numActions = 0;
    }
    if (
      object.producerAddress !== undefined &&
      object.producerAddress !== null
    ) {
      message.producerAddress = String(object.producerAddress);
    } else {
      message.producerAddress = "";
    }
    if (object.transferAmount !== undefined && object.transferAmount !== null) {
      message.transferAmount = String(object.transferAmount);
    } else {
      message.transferAmount = "";
    }
    if (object.txRoot !== undefined && object.txRoot !== null) {
      message.txRoot = String(object.txRoot);
    } else {
      message.txRoot = "";
    }
    if (object.receiptRoot !== undefined && object.receiptRoot !== null) {
      message.receiptRoot = String(object.receiptRoot);
    } else {
      message.receiptRoot = "";
    }
    if (
      object.deltaStateDigest !== undefined &&
      object.deltaStateDigest !== null
    ) {
      message.deltaStateDigest = String(object.deltaStateDigest);
    } else {
      message.deltaStateDigest = "";
    }
    if (object.logsBloom !== undefined && object.logsBloom !== null) {
      message.logsBloom = String(object.logsBloom);
    } else {
      message.logsBloom = "";
    }
    if (
      object.previousBlockHash !== undefined &&
      object.previousBlockHash !== null
    ) {
      message.previousBlockHash = String(object.previousBlockHash);
    } else {
      message.previousBlockHash = "";
    }
    if (object.gasLimit !== undefined && object.gasLimit !== null) {
      message.gasLimit = Number(object.gasLimit);
    } else {
      message.gasLimit = 0;
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = Number(object.gasUsed);
    } else {
      message.gasUsed = 0;
    }
    return message;
  },

  toJSON(message: BlockMeta): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.height !== undefined && (obj.height = message.height);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.numActions !== undefined && (obj.numActions = message.numActions);
    message.producerAddress !== undefined &&
      (obj.producerAddress = message.producerAddress);
    message.transferAmount !== undefined &&
      (obj.transferAmount = message.transferAmount);
    message.txRoot !== undefined && (obj.txRoot = message.txRoot);
    message.receiptRoot !== undefined &&
      (obj.receiptRoot = message.receiptRoot);
    message.deltaStateDigest !== undefined &&
      (obj.deltaStateDigest = message.deltaStateDigest);
    message.logsBloom !== undefined && (obj.logsBloom = message.logsBloom);
    message.previousBlockHash !== undefined &&
      (obj.previousBlockHash = message.previousBlockHash);
    message.gasLimit !== undefined && (obj.gasLimit = message.gasLimit);
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockMeta>): BlockMeta {
    const message = { ...baseBlockMeta } as BlockMeta;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.numActions !== undefined && object.numActions !== null) {
      message.numActions = object.numActions;
    } else {
      message.numActions = 0;
    }
    if (
      object.producerAddress !== undefined &&
      object.producerAddress !== null
    ) {
      message.producerAddress = object.producerAddress;
    } else {
      message.producerAddress = "";
    }
    if (object.transferAmount !== undefined && object.transferAmount !== null) {
      message.transferAmount = object.transferAmount;
    } else {
      message.transferAmount = "";
    }
    if (object.txRoot !== undefined && object.txRoot !== null) {
      message.txRoot = object.txRoot;
    } else {
      message.txRoot = "";
    }
    if (object.receiptRoot !== undefined && object.receiptRoot !== null) {
      message.receiptRoot = object.receiptRoot;
    } else {
      message.receiptRoot = "";
    }
    if (
      object.deltaStateDigest !== undefined &&
      object.deltaStateDigest !== null
    ) {
      message.deltaStateDigest = object.deltaStateDigest;
    } else {
      message.deltaStateDigest = "";
    }
    if (object.logsBloom !== undefined && object.logsBloom !== null) {
      message.logsBloom = object.logsBloom;
    } else {
      message.logsBloom = "";
    }
    if (
      object.previousBlockHash !== undefined &&
      object.previousBlockHash !== null
    ) {
      message.previousBlockHash = object.previousBlockHash;
    } else {
      message.previousBlockHash = "";
    }
    if (object.gasLimit !== undefined && object.gasLimit !== null) {
      message.gasLimit = object.gasLimit;
    } else {
      message.gasLimit = 0;
    }
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = object.gasUsed;
    } else {
      message.gasUsed = 0;
    }
    return message;
  },
};

const baseBlockIdentifier: object = { hash: "", height: 0 };

export const BlockIdentifier = {
  encode(
    message: BlockIdentifier,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockIdentifier {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockIdentifier } as BlockIdentifier;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockIdentifier {
    const message = { ...baseBlockIdentifier } as BlockIdentifier;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: BlockIdentifier): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockIdentifier>): BlockIdentifier {
    const message = { ...baseBlockIdentifier } as BlockIdentifier;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseAccountMeta: object = {
  address: "",
  balance: "",
  nonce: 0,
  pendingNonce: 0,
  numActions: 0,
  isContract: false,
};

export const AccountMeta = {
  encode(
    message: AccountMeta,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.nonce !== 0) {
      writer.uint32(24).uint64(message.nonce);
    }
    if (message.pendingNonce !== 0) {
      writer.uint32(32).uint64(message.pendingNonce);
    }
    if (message.numActions !== 0) {
      writer.uint32(40).uint64(message.numActions);
    }
    if (message.isContract === true) {
      writer.uint32(48).bool(message.isContract);
    }
    if (message.contractByteCode.length !== 0) {
      writer.uint32(58).bytes(message.contractByteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountMeta } as AccountMeta;
    message.contractByteCode = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.pendingNonce = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.numActions = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.isContract = reader.bool();
          break;
        case 7:
          message.contractByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeta {
    const message = { ...baseAccountMeta } as AccountMeta;
    message.contractByteCode = new Uint8Array();
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.pendingNonce !== undefined && object.pendingNonce !== null) {
      message.pendingNonce = Number(object.pendingNonce);
    } else {
      message.pendingNonce = 0;
    }
    if (object.numActions !== undefined && object.numActions !== null) {
      message.numActions = Number(object.numActions);
    } else {
      message.numActions = 0;
    }
    if (object.isContract !== undefined && object.isContract !== null) {
      message.isContract = Boolean(object.isContract);
    } else {
      message.isContract = false;
    }
    if (
      object.contractByteCode !== undefined &&
      object.contractByteCode !== null
    ) {
      message.contractByteCode = bytesFromBase64(object.contractByteCode);
    }
    return message;
  },

  toJSON(message: AccountMeta): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined && (obj.balance = message.balance);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.pendingNonce !== undefined &&
      (obj.pendingNonce = message.pendingNonce);
    message.numActions !== undefined && (obj.numActions = message.numActions);
    message.isContract !== undefined && (obj.isContract = message.isContract);
    message.contractByteCode !== undefined &&
      (obj.contractByteCode = base64FromBytes(
        message.contractByteCode !== undefined
          ? message.contractByteCode
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<AccountMeta>): AccountMeta {
    const message = { ...baseAccountMeta } as AccountMeta;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.pendingNonce !== undefined && object.pendingNonce !== null) {
      message.pendingNonce = object.pendingNonce;
    } else {
      message.pendingNonce = 0;
    }
    if (object.numActions !== undefined && object.numActions !== null) {
      message.numActions = object.numActions;
    } else {
      message.numActions = 0;
    }
    if (object.isContract !== undefined && object.isContract !== null) {
      message.isContract = object.isContract;
    } else {
      message.isContract = false;
    }
    if (
      object.contractByteCode !== undefined &&
      object.contractByteCode !== null
    ) {
      message.contractByteCode = object.contractByteCode;
    } else {
      message.contractByteCode = new Uint8Array();
    }
    return message;
  },
};

const baseBlockStore: object = {};

export const BlockStore = {
  encode(
    message: BlockStore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockStore } as BlockStore;
    message.receipts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 2:
          message.receipts.push(Receipt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockStore {
    const message = { ...baseBlockStore } as BlockStore;
    message.receipts = [];
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromJSON(object.block);
    } else {
      message.block = undefined;
    }
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(Receipt.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BlockStore): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    if (message.receipts) {
      obj.receipts = message.receipts.map((e) =>
        e ? Receipt.toJSON(e) : undefined
      );
    } else {
      obj.receipts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockStore>): BlockStore {
    const message = { ...baseBlockStore } as BlockStore;
    message.receipts = [];
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    } else {
      message.block = undefined;
    }
    if (object.receipts !== undefined && object.receipts !== null) {
      for (const e of object.receipts) {
        message.receipts.push(Receipt.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBlockStores: object = {};

export const BlockStores = {
  encode(
    message: BlockStores,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blockStores) {
      BlockStore.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStores {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockStores } as BlockStores;
    message.blockStores = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockStores.push(BlockStore.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockStores {
    const message = { ...baseBlockStores } as BlockStores;
    message.blockStores = [];
    if (object.blockStores !== undefined && object.blockStores !== null) {
      for (const e of object.blockStores) {
        message.blockStores.push(BlockStore.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BlockStores): unknown {
    const obj: any = {};
    if (message.blockStores) {
      obj.blockStores = message.blockStores.map((e) =>
        e ? BlockStore.toJSON(e) : undefined
      );
    } else {
      obj.blockStores = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockStores>): BlockStores {
    const message = { ...baseBlockStores } as BlockStores;
    message.blockStores = [];
    if (object.blockStores !== undefined && object.blockStores !== null) {
      for (const e of object.blockStores) {
        message.blockStores.push(BlockStore.fromPartial(e));
      }
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
