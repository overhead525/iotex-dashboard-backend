/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

export enum TransactionLogType {
  IN_CONTRACT_TRANSFER = 0,
  WITHDRAW_BUCKET = 1,
  CREATE_BUCKET = 2,
  DEPOSIT_TO_BUCKET = 3,
  CANDIDATE_SELF_STAKE = 4,
  CANDIDATE_REGISTRATION_FEE = 5,
  GAS_FEE = 6,
  NATIVE_TRANSFER = 7,
  DEPOSIT_TO_REWARDING_FUND = 8,
  CLAIM_FROM_REWARDING_FUND = 9,
  UNRECOGNIZED = -1,
}

export function transactionLogTypeFromJSON(object: any): TransactionLogType {
  switch (object) {
    case 0:
    case "IN_CONTRACT_TRANSFER":
      return TransactionLogType.IN_CONTRACT_TRANSFER;
    case 1:
    case "WITHDRAW_BUCKET":
      return TransactionLogType.WITHDRAW_BUCKET;
    case 2:
    case "CREATE_BUCKET":
      return TransactionLogType.CREATE_BUCKET;
    case 3:
    case "DEPOSIT_TO_BUCKET":
      return TransactionLogType.DEPOSIT_TO_BUCKET;
    case 4:
    case "CANDIDATE_SELF_STAKE":
      return TransactionLogType.CANDIDATE_SELF_STAKE;
    case 5:
    case "CANDIDATE_REGISTRATION_FEE":
      return TransactionLogType.CANDIDATE_REGISTRATION_FEE;
    case 6:
    case "GAS_FEE":
      return TransactionLogType.GAS_FEE;
    case 7:
    case "NATIVE_TRANSFER":
      return TransactionLogType.NATIVE_TRANSFER;
    case 8:
    case "DEPOSIT_TO_REWARDING_FUND":
      return TransactionLogType.DEPOSIT_TO_REWARDING_FUND;
    case 9:
    case "CLAIM_FROM_REWARDING_FUND":
      return TransactionLogType.CLAIM_FROM_REWARDING_FUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionLogType.UNRECOGNIZED;
  }
}

export function transactionLogTypeToJSON(object: TransactionLogType): string {
  switch (object) {
    case TransactionLogType.IN_CONTRACT_TRANSFER:
      return "IN_CONTRACT_TRANSFER";
    case TransactionLogType.WITHDRAW_BUCKET:
      return "WITHDRAW_BUCKET";
    case TransactionLogType.CREATE_BUCKET:
      return "CREATE_BUCKET";
    case TransactionLogType.DEPOSIT_TO_BUCKET:
      return "DEPOSIT_TO_BUCKET";
    case TransactionLogType.CANDIDATE_SELF_STAKE:
      return "CANDIDATE_SELF_STAKE";
    case TransactionLogType.CANDIDATE_REGISTRATION_FEE:
      return "CANDIDATE_REGISTRATION_FEE";
    case TransactionLogType.GAS_FEE:
      return "GAS_FEE";
    case TransactionLogType.NATIVE_TRANSFER:
      return "NATIVE_TRANSFER";
    case TransactionLogType.DEPOSIT_TO_REWARDING_FUND:
      return "DEPOSIT_TO_REWARDING_FUND";
    case TransactionLogType.CLAIM_FROM_REWARDING_FUND:
      return "CLAIM_FROM_REWARDING_FUND";
    default:
      return "UNKNOWN";
  }
}

export interface TransactionLog {
  actionHash: Uint8Array;
  numTransactions: number;
  transactions: TransactionLog_Transaction[];
}

export interface TransactionLog_Transaction {
  topic: Uint8Array;
  amount: string;
  sender: string;
  recipient: string;
  type: TransactionLogType;
}

export interface TransactionLogs {
  logs: TransactionLog[];
}

const baseTransactionLog: object = { numTransactions: 0 };

export const TransactionLog = {
  encode(
    message: TransactionLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionHash.length !== 0) {
      writer.uint32(10).bytes(message.actionHash);
    }
    if (message.numTransactions !== 0) {
      writer.uint32(16).uint64(message.numTransactions);
    }
    for (const v of message.transactions) {
      TransactionLog_Transaction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransactionLog } as TransactionLog;
    message.transactions = [];
    message.actionHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHash = reader.bytes();
          break;
        case 2:
          message.numTransactions = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.transactions.push(
            TransactionLog_Transaction.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionLog {
    const message = { ...baseTransactionLog } as TransactionLog;
    message.transactions = [];
    message.actionHash = new Uint8Array();
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = bytesFromBase64(object.actionHash);
    }
    if (
      object.numTransactions !== undefined &&
      object.numTransactions !== null
    ) {
      message.numTransactions = Number(object.numTransactions);
    } else {
      message.numTransactions = 0;
    }
    if (object.transactions !== undefined && object.transactions !== null) {
      for (const e of object.transactions) {
        message.transactions.push(TransactionLog_Transaction.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: TransactionLog): unknown {
    const obj: any = {};
    message.actionHash !== undefined &&
      (obj.actionHash = base64FromBytes(
        message.actionHash !== undefined ? message.actionHash : new Uint8Array()
      ));
    message.numTransactions !== undefined &&
      (obj.numTransactions = message.numTransactions);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? TransactionLog_Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TransactionLog>): TransactionLog {
    const message = { ...baseTransactionLog } as TransactionLog;
    message.transactions = [];
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = object.actionHash;
    } else {
      message.actionHash = new Uint8Array();
    }
    if (
      object.numTransactions !== undefined &&
      object.numTransactions !== null
    ) {
      message.numTransactions = object.numTransactions;
    } else {
      message.numTransactions = 0;
    }
    if (object.transactions !== undefined && object.transactions !== null) {
      for (const e of object.transactions) {
        message.transactions.push(TransactionLog_Transaction.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTransactionLog_Transaction: object = {
  amount: "",
  sender: "",
  recipient: "",
  type: 0,
};

export const TransactionLog_Transaction = {
  encode(
    message: TransactionLog_Transaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.topic.length !== 0) {
      writer.uint32(10).bytes(message.topic);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransactionLog_Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseTransactionLog_Transaction,
    } as TransactionLog_Transaction;
    message.topic = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.bytes();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionLog_Transaction {
    const message = {
      ...baseTransactionLog_Transaction,
    } as TransactionLog_Transaction;
    message.topic = new Uint8Array();
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = bytesFromBase64(object.topic);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = transactionLogTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: TransactionLog_Transaction): unknown {
    const obj: any = {};
    message.topic !== undefined &&
      (obj.topic = base64FromBytes(
        message.topic !== undefined ? message.topic : new Uint8Array()
      ));
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.type !== undefined &&
      (obj.type = transactionLogTypeToJSON(message.type));
    return obj;
  },

  fromPartial(
    object: DeepPartial<TransactionLog_Transaction>
  ): TransactionLog_Transaction {
    const message = {
      ...baseTransactionLog_Transaction,
    } as TransactionLog_Transaction;
    if (object.topic !== undefined && object.topic !== null) {
      message.topic = object.topic;
    } else {
      message.topic = new Uint8Array();
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseTransactionLogs: object = {};

export const TransactionLogs = {
  encode(
    message: TransactionLogs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logs) {
      TransactionLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionLogs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransactionLogs } as TransactionLogs;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(TransactionLog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionLogs {
    const message = { ...baseTransactionLogs } as TransactionLogs;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(TransactionLog.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: TransactionLogs): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) =>
        e ? TransactionLog.toJSON(e) : undefined
      );
    } else {
      obj.logs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TransactionLogs>): TransactionLogs {
    const message = { ...baseTransactionLogs } as TransactionLogs;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(TransactionLog.fromPartial(e));
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
