/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Timestamp } from "../../google/protobuf/timestamp";
import {
  AccountMeta,
  BlockIdentifier,
  Block,
  BlockMeta,
  ChainMeta,
  EpochData,
} from "../../proto/types/blockchain";
import {
  Action,
  Receipt,
  Execution,
  Transfer,
  StakeCreate,
  StakeReclaim,
  StakeAddDeposit,
  StakeRestake,
  StakeChangeCandidate,
  StakeTransferOwnership,
  CandidateRegister,
  CandidateBasicInfo,
  Log,
  ActionEvmTransfer,
  BlockEvmTransfer,
} from "../../proto/types/action";
import {
  TransactionLogs,
  TransactionLog,
} from "../../proto/types/transaction_log";
import { ServerMeta } from "../../proto/types/node";
import { ElectionBucket } from "../../proto/types/election";

export const protobufPackage = "iotexapi";

/**
 * To compile the proto, run:
 *      protoc -I. -I ./../types --go_out=plugins=grpc:$GOPATH/src *.proto
 */

export interface Bucket {
  /** hex string */
  voter: string;
  votes: string;
  weightedVotes: string;
  /** human readable duration */
  remainingDuration: string;
}

export interface GetAccountRequest {
  address: string;
}

export interface GetAccountResponse {
  accountMeta: AccountMeta | undefined;
  blockIdentifier: BlockIdentifier | undefined;
}

export interface GetActionsRequest {
  byIndex: GetActionsByIndexRequest | undefined;
  byHash: GetActionByHashRequest | undefined;
  byAddr: GetActionsByAddressRequest | undefined;
  unconfirmedByAddr: GetUnconfirmedActionsByAddressRequest | undefined;
  byBlk: GetActionsByBlockRequest | undefined;
}

export interface GetActionsByIndexRequest {
  start: number;
  count: number;
}

export interface GetActionByHashRequest {
  actionHash: string;
  checkPending: boolean;
}

export interface GetActionsByAddressRequest {
  address: string;
  start: number;
  count: number;
}

export interface GetUnconfirmedActionsByAddressRequest {
  address: string;
  start: number;
  count: number;
}

export interface GetActionsByBlockRequest {
  blkHash: string;
  start: number;
  count: number;
}

export interface ActionInfo {
  action: Action | undefined;
  actHash: string;
  blkHash: string;
  timestamp: Date | undefined;
  blkHeight: number;
  sender: string;
  gasFee: string;
  index: number;
}

export interface ReceiptInfo {
  receipt: Receipt | undefined;
  blkHash: string;
}

export interface BlockProducerInfo {
  address: string;
  votes: string;
  active: boolean;
  production: number;
}

export interface BlockInfo {
  block: Block | undefined;
  receipts: Receipt[];
  transactionLogs: TransactionLogs | undefined;
}

export interface GetActionsResponse {
  total: number;
  actionInfo: ActionInfo[];
}

export interface GetBlockMetasRequest {
  byIndex: GetBlockMetasByIndexRequest | undefined;
  byHash: GetBlockMetaByHashRequest | undefined;
}

export interface GetBlockMetasByIndexRequest {
  start: number;
  count: number;
}

export interface GetBlockMetaByHashRequest {
  blkHash: string;
}

export interface GetBlockMetasResponse {
  total: number;
  blkMetas: BlockMeta[];
}

export interface GetChainMetaRequest {}

export interface GetChainMetaResponse {
  chainMeta: ChainMeta | undefined;
  /** sync stage */
  syncStage: string;
}

export interface GetServerMetaRequest {}

export interface GetServerMetaResponse {
  serverMeta: ServerMeta | undefined;
}

export interface SendActionRequest {
  action: Action | undefined;
}

export interface SendSignedActionBytesRequest {
  signedActionBytes: string;
}

export interface SendActionResponse {
  actionHash: string;
}

export interface GetReceiptByActionRequest {
  actionHash: string;
}

export interface GetReceiptByActionResponse {
  receiptInfo: ReceiptInfo | undefined;
}

export interface ReadContractRequest {
  execution: Execution | undefined;
  callerAddress: string;
}

export interface ReadContractResponse {
  data: string;
  receipt: Receipt | undefined;
}

export interface SuggestGasPriceRequest {}

export interface SuggestGasPriceResponse {
  gasPrice: number;
}

/** To be deprecated */
export interface EstimateGasForActionRequest {
  action: Action | undefined;
}

export interface EstimateActionGasConsumptionRequest {
  transfer: Transfer | undefined;
  execution: Execution | undefined;
  /** Native staking */
  stakeCreate: StakeCreate | undefined;
  stakeUnstake: StakeReclaim | undefined;
  stakeWithdraw: StakeReclaim | undefined;
  stakeAddDeposit: StakeAddDeposit | undefined;
  stakeRestake: StakeRestake | undefined;
  stakeChangeCandidate: StakeChangeCandidate | undefined;
  stakeTransferOwnership: StakeTransferOwnership | undefined;
  candidateRegister: CandidateRegister | undefined;
  candidateUpdate: CandidateBasicInfo | undefined;
  callerAddress: string;
}

export interface EstimateActionGasConsumptionResponse {
  gas: number;
}

export interface EstimateGasForActionResponse {
  gas: number;
}

export interface ReadStateRequest {
  protocolID: Uint8Array;
  methodName: Uint8Array;
  arguments: Uint8Array[];
  /** optional, if not present, read from tip height */
  height: string;
}

export interface ReadStateResponse {
  data: Uint8Array;
  blockIdentifier: BlockIdentifier | undefined;
}

export interface GetEpochMetaRequest {
  epochNumber: number;
}

export interface GetEpochMetaResponse {
  epochData: EpochData | undefined;
  totalBlocks: number;
  blockProducersInfo: BlockProducerInfo[];
}

export interface GetRawBlocksRequest {
  startHeight: number;
  count: number;
  withReceipts: boolean;
  withTransactionLogs: boolean;
}

export interface GetRawBlocksResponse {
  blocks: BlockInfo[];
}

export interface GetLogsByBlock {
  blockHash: Uint8Array;
}

export interface GetLogsByRange {
  fromBlock: number;
  toBlock: number;
  paginationSize: number;
}

export interface Topics {
  topic: Uint8Array[];
}

export interface LogsFilter {
  address: string[];
  topics: Topics[];
}

export interface GetLogsRequest {
  filter: LogsFilter | undefined;
  byBlock: GetLogsByBlock | undefined;
  byRange: GetLogsByRange | undefined;
}

export interface GetLogsResponse {
  logs: Log[];
}

export interface GetTransactionLogByActionHashRequest {
  actionHash: string;
}

export interface GetTransactionLogByActionHashResponse {
  transactionLog: TransactionLog | undefined;
}

export interface GetTransactionLogByBlockHeightRequest {
  blockHeight: number;
}

export interface GetTransactionLogByBlockHeightResponse {
  transactionLogs: TransactionLogs | undefined;
  blockIdentifier: BlockIdentifier | undefined;
}

/** below are streaming APIs */
export interface StreamBlocksRequest {}

export interface StreamBlocksResponse {
  block: BlockInfo | undefined;
  blockIdentifier: BlockIdentifier | undefined;
}

export interface StreamLogsRequest {
  filter: LogsFilter | undefined;
}

export interface StreamLogsResponse {
  log: Log | undefined;
}

export interface GetActPoolActionsRequest {
  /** if this field is absent, get all actions from actpool */
  actionHashes: string[];
}

export interface GetActPoolActionsResponse {
  actions: Action[];
}

/** election APIs */
export interface GetElectionBucketsRequest {
  epochNum: number;
}

export interface GetElectionBucketsResponse {
  buckets: ElectionBucket[];
}

/** Deprecated */
export interface GetEvmTransfersByActionHashRequest {
  actionHash: string;
}

/** Deprecated */
export interface GetEvmTransfersByActionHashResponse {
  actionEvmTransfers: ActionEvmTransfer | undefined;
}

/** Deprecated */
export interface GetEvmTransfersByBlockHeightRequest {
  blockHeight: number;
}

/** Deprecated */
export interface GetEvmTransfersByBlockHeightResponse {
  blockEvmTransfers: BlockEvmTransfer | undefined;
}

const baseBucket: object = {
  voter: "",
  votes: "",
  weightedVotes: "",
  remainingDuration: "",
};

export const Bucket = {
  encode(
    message: Bucket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voter !== "") {
      writer.uint32(10).string(message.voter);
    }
    if (message.votes !== "") {
      writer.uint32(18).string(message.votes);
    }
    if (message.weightedVotes !== "") {
      writer.uint32(26).string(message.weightedVotes);
    }
    if (message.remainingDuration !== "") {
      writer.uint32(34).string(message.remainingDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBucket } as Bucket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = reader.string();
          break;
        case 2:
          message.votes = reader.string();
          break;
        case 3:
          message.weightedVotes = reader.string();
          break;
        case 4:
          message.remainingDuration = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bucket {
    const message = { ...baseBucket } as Bucket;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = String(object.votes);
    } else {
      message.votes = "";
    }
    if (object.weightedVotes !== undefined && object.weightedVotes !== null) {
      message.weightedVotes = String(object.weightedVotes);
    } else {
      message.weightedVotes = "";
    }
    if (
      object.remainingDuration !== undefined &&
      object.remainingDuration !== null
    ) {
      message.remainingDuration = String(object.remainingDuration);
    } else {
      message.remainingDuration = "";
    }
    return message;
  },

  toJSON(message: Bucket): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter);
    message.votes !== undefined && (obj.votes = message.votes);
    message.weightedVotes !== undefined &&
      (obj.weightedVotes = message.weightedVotes);
    message.remainingDuration !== undefined &&
      (obj.remainingDuration = message.remainingDuration);
    return obj;
  },

  fromPartial(object: DeepPartial<Bucket>): Bucket {
    const message = { ...baseBucket } as Bucket;
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = object.votes;
    } else {
      message.votes = "";
    }
    if (object.weightedVotes !== undefined && object.weightedVotes !== null) {
      message.weightedVotes = object.weightedVotes;
    } else {
      message.weightedVotes = "";
    }
    if (
      object.remainingDuration !== undefined &&
      object.remainingDuration !== null
    ) {
      message.remainingDuration = object.remainingDuration;
    } else {
      message.remainingDuration = "";
    }
    return message;
  },
};

const baseGetAccountRequest: object = { address: "" };

export const GetAccountRequest = {
  encode(
    message: GetAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAccountRequest } as GetAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccountRequest {
    const message = { ...baseGetAccountRequest } as GetAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: GetAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAccountRequest>): GetAccountRequest {
    const message = { ...baseGetAccountRequest } as GetAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseGetAccountResponse: object = {};

export const GetAccountResponse = {
  encode(
    message: GetAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountMeta !== undefined) {
      AccountMeta.encode(
        message.accountMeta,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.blockIdentifier !== undefined) {
      BlockIdentifier.encode(
        message.blockIdentifier,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAccountResponse } as GetAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountMeta = AccountMeta.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockIdentifier = BlockIdentifier.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccountResponse {
    const message = { ...baseGetAccountResponse } as GetAccountResponse;
    if (object.accountMeta !== undefined && object.accountMeta !== null) {
      message.accountMeta = AccountMeta.fromJSON(object.accountMeta);
    } else {
      message.accountMeta = undefined;
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromJSON(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },

  toJSON(message: GetAccountResponse): unknown {
    const obj: any = {};
    message.accountMeta !== undefined &&
      (obj.accountMeta = message.accountMeta
        ? AccountMeta.toJSON(message.accountMeta)
        : undefined);
    message.blockIdentifier !== undefined &&
      (obj.blockIdentifier = message.blockIdentifier
        ? BlockIdentifier.toJSON(message.blockIdentifier)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAccountResponse>): GetAccountResponse {
    const message = { ...baseGetAccountResponse } as GetAccountResponse;
    if (object.accountMeta !== undefined && object.accountMeta !== null) {
      message.accountMeta = AccountMeta.fromPartial(object.accountMeta);
    } else {
      message.accountMeta = undefined;
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromPartial(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },
};

const baseGetActionsRequest: object = {};

export const GetActionsRequest = {
  encode(
    message: GetActionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byIndex !== undefined) {
      GetActionsByIndexRequest.encode(
        message.byIndex,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.byHash !== undefined) {
      GetActionByHashRequest.encode(
        message.byHash,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.byAddr !== undefined) {
      GetActionsByAddressRequest.encode(
        message.byAddr,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.unconfirmedByAddr !== undefined) {
      GetUnconfirmedActionsByAddressRequest.encode(
        message.unconfirmedByAddr,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.byBlk !== undefined) {
      GetActionsByBlockRequest.encode(
        message.byBlk,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetActionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetActionsRequest } as GetActionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byIndex = GetActionsByIndexRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.byHash = GetActionByHashRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.byAddr = GetActionsByAddressRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.unconfirmedByAddr =
            GetUnconfirmedActionsByAddressRequest.decode(
              reader,
              reader.uint32()
            );
          break;
        case 5:
          message.byBlk = GetActionsByBlockRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActionsRequest {
    const message = { ...baseGetActionsRequest } as GetActionsRequest;
    if (object.byIndex !== undefined && object.byIndex !== null) {
      message.byIndex = GetActionsByIndexRequest.fromJSON(object.byIndex);
    } else {
      message.byIndex = undefined;
    }
    if (object.byHash !== undefined && object.byHash !== null) {
      message.byHash = GetActionByHashRequest.fromJSON(object.byHash);
    } else {
      message.byHash = undefined;
    }
    if (object.byAddr !== undefined && object.byAddr !== null) {
      message.byAddr = GetActionsByAddressRequest.fromJSON(object.byAddr);
    } else {
      message.byAddr = undefined;
    }
    if (
      object.unconfirmedByAddr !== undefined &&
      object.unconfirmedByAddr !== null
    ) {
      message.unconfirmedByAddr =
        GetUnconfirmedActionsByAddressRequest.fromJSON(
          object.unconfirmedByAddr
        );
    } else {
      message.unconfirmedByAddr = undefined;
    }
    if (object.byBlk !== undefined && object.byBlk !== null) {
      message.byBlk = GetActionsByBlockRequest.fromJSON(object.byBlk);
    } else {
      message.byBlk = undefined;
    }
    return message;
  },

  toJSON(message: GetActionsRequest): unknown {
    const obj: any = {};
    message.byIndex !== undefined &&
      (obj.byIndex = message.byIndex
        ? GetActionsByIndexRequest.toJSON(message.byIndex)
        : undefined);
    message.byHash !== undefined &&
      (obj.byHash = message.byHash
        ? GetActionByHashRequest.toJSON(message.byHash)
        : undefined);
    message.byAddr !== undefined &&
      (obj.byAddr = message.byAddr
        ? GetActionsByAddressRequest.toJSON(message.byAddr)
        : undefined);
    message.unconfirmedByAddr !== undefined &&
      (obj.unconfirmedByAddr = message.unconfirmedByAddr
        ? GetUnconfirmedActionsByAddressRequest.toJSON(
            message.unconfirmedByAddr
          )
        : undefined);
    message.byBlk !== undefined &&
      (obj.byBlk = message.byBlk
        ? GetActionsByBlockRequest.toJSON(message.byBlk)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetActionsRequest>): GetActionsRequest {
    const message = { ...baseGetActionsRequest } as GetActionsRequest;
    if (object.byIndex !== undefined && object.byIndex !== null) {
      message.byIndex = GetActionsByIndexRequest.fromPartial(object.byIndex);
    } else {
      message.byIndex = undefined;
    }
    if (object.byHash !== undefined && object.byHash !== null) {
      message.byHash = GetActionByHashRequest.fromPartial(object.byHash);
    } else {
      message.byHash = undefined;
    }
    if (object.byAddr !== undefined && object.byAddr !== null) {
      message.byAddr = GetActionsByAddressRequest.fromPartial(object.byAddr);
    } else {
      message.byAddr = undefined;
    }
    if (
      object.unconfirmedByAddr !== undefined &&
      object.unconfirmedByAddr !== null
    ) {
      message.unconfirmedByAddr =
        GetUnconfirmedActionsByAddressRequest.fromPartial(
          object.unconfirmedByAddr
        );
    } else {
      message.unconfirmedByAddr = undefined;
    }
    if (object.byBlk !== undefined && object.byBlk !== null) {
      message.byBlk = GetActionsByBlockRequest.fromPartial(object.byBlk);
    } else {
      message.byBlk = undefined;
    }
    return message;
  },
};

const baseGetActionsByIndexRequest: object = { start: 0, count: 0 };

export const GetActionsByIndexRequest = {
  encode(
    message: GetActionsByIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).uint64(message.start);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActionsByIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetActionsByIndexRequest,
    } as GetActionsByIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActionsByIndexRequest {
    const message = {
      ...baseGetActionsByIndexRequest,
    } as GetActionsByIndexRequest;
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: GetActionsByIndexRequest): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetActionsByIndexRequest>
  ): GetActionsByIndexRequest {
    const message = {
      ...baseGetActionsByIndexRequest,
    } as GetActionsByIndexRequest;
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseGetActionByHashRequest: object = {
  actionHash: "",
  checkPending: false,
};

export const GetActionByHashRequest = {
  encode(
    message: GetActionByHashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionHash !== "") {
      writer.uint32(10).string(message.actionHash);
    }
    if (message.checkPending === true) {
      writer.uint32(16).bool(message.checkPending);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActionByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetActionByHashRequest } as GetActionByHashRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHash = reader.string();
          break;
        case 2:
          message.checkPending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActionByHashRequest {
    const message = { ...baseGetActionByHashRequest } as GetActionByHashRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = String(object.actionHash);
    } else {
      message.actionHash = "";
    }
    if (object.checkPending !== undefined && object.checkPending !== null) {
      message.checkPending = Boolean(object.checkPending);
    } else {
      message.checkPending = false;
    }
    return message;
  },

  toJSON(message: GetActionByHashRequest): unknown {
    const obj: any = {};
    message.actionHash !== undefined && (obj.actionHash = message.actionHash);
    message.checkPending !== undefined &&
      (obj.checkPending = message.checkPending);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetActionByHashRequest>
  ): GetActionByHashRequest {
    const message = { ...baseGetActionByHashRequest } as GetActionByHashRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = object.actionHash;
    } else {
      message.actionHash = "";
    }
    if (object.checkPending !== undefined && object.checkPending !== null) {
      message.checkPending = object.checkPending;
    } else {
      message.checkPending = false;
    }
    return message;
  },
};

const baseGetActionsByAddressRequest: object = {
  address: "",
  start: 0,
  count: 0,
};

export const GetActionsByAddressRequest = {
  encode(
    message: GetActionsByAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.start !== 0) {
      writer.uint32(16).uint64(message.start);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActionsByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetActionsByAddressRequest,
    } as GetActionsByAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActionsByAddressRequest {
    const message = {
      ...baseGetActionsByAddressRequest,
    } as GetActionsByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: GetActionsByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.start !== undefined && (obj.start = message.start);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetActionsByAddressRequest>
  ): GetActionsByAddressRequest {
    const message = {
      ...baseGetActionsByAddressRequest,
    } as GetActionsByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseGetUnconfirmedActionsByAddressRequest: object = {
  address: "",
  start: 0,
  count: 0,
};

export const GetUnconfirmedActionsByAddressRequest = {
  encode(
    message: GetUnconfirmedActionsByAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.start !== 0) {
      writer.uint32(16).uint64(message.start);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUnconfirmedActionsByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetUnconfirmedActionsByAddressRequest,
    } as GetUnconfirmedActionsByAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUnconfirmedActionsByAddressRequest {
    const message = {
      ...baseGetUnconfirmedActionsByAddressRequest,
    } as GetUnconfirmedActionsByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: GetUnconfirmedActionsByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.start !== undefined && (obj.start = message.start);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetUnconfirmedActionsByAddressRequest>
  ): GetUnconfirmedActionsByAddressRequest {
    const message = {
      ...baseGetUnconfirmedActionsByAddressRequest,
    } as GetUnconfirmedActionsByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseGetActionsByBlockRequest: object = {
  blkHash: "",
  start: 0,
  count: 0,
};

export const GetActionsByBlockRequest = {
  encode(
    message: GetActionsByBlockRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blkHash !== "") {
      writer.uint32(10).string(message.blkHash);
    }
    if (message.start !== 0) {
      writer.uint32(16).uint64(message.start);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActionsByBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetActionsByBlockRequest,
    } as GetActionsByBlockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blkHash = reader.string();
          break;
        case 2:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActionsByBlockRequest {
    const message = {
      ...baseGetActionsByBlockRequest,
    } as GetActionsByBlockRequest;
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = String(object.blkHash);
    } else {
      message.blkHash = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: GetActionsByBlockRequest): unknown {
    const obj: any = {};
    message.blkHash !== undefined && (obj.blkHash = message.blkHash);
    message.start !== undefined && (obj.start = message.start);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetActionsByBlockRequest>
  ): GetActionsByBlockRequest {
    const message = {
      ...baseGetActionsByBlockRequest,
    } as GetActionsByBlockRequest;
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = object.blkHash;
    } else {
      message.blkHash = "";
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseActionInfo: object = {
  actHash: "",
  blkHash: "",
  blkHeight: 0,
  sender: "",
  gasFee: "",
  index: 0,
};

export const ActionInfo = {
  encode(
    message: ActionInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    if (message.actHash !== "") {
      writer.uint32(18).string(message.actHash);
    }
    if (message.blkHash !== "") {
      writer.uint32(26).string(message.blkHash);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.blkHeight !== 0) {
      writer.uint32(40).uint64(message.blkHeight);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    if (message.gasFee !== "") {
      writer.uint32(58).string(message.gasFee);
    }
    if (message.index !== 0) {
      writer.uint32(64).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseActionInfo } as ActionInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32());
          break;
        case 2:
          message.actHash = reader.string();
          break;
        case 3:
          message.blkHash = reader.string();
          break;
        case 4:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.blkHeight = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.sender = reader.string();
          break;
        case 7:
          message.gasFee = reader.string();
          break;
        case 8:
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionInfo {
    const message = { ...baseActionInfo } as ActionInfo;
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromJSON(object.action);
    } else {
      message.action = undefined;
    }
    if (object.actHash !== undefined && object.actHash !== null) {
      message.actHash = String(object.actHash);
    } else {
      message.actHash = "";
    }
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = String(object.blkHash);
    } else {
      message.blkHash = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    if (object.blkHeight !== undefined && object.blkHeight !== null) {
      message.blkHeight = Number(object.blkHeight);
    } else {
      message.blkHeight = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.gasFee !== undefined && object.gasFee !== null) {
      message.gasFee = String(object.gasFee);
    } else {
      message.gasFee = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    return message;
  },

  toJSON(message: ActionInfo): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    message.actHash !== undefined && (obj.actHash = message.actHash);
    message.blkHash !== undefined && (obj.blkHash = message.blkHash);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.blkHeight !== undefined && (obj.blkHeight = message.blkHeight);
    message.sender !== undefined && (obj.sender = message.sender);
    message.gasFee !== undefined && (obj.gasFee = message.gasFee);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionInfo>): ActionInfo {
    const message = { ...baseActionInfo } as ActionInfo;
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromPartial(object.action);
    } else {
      message.action = undefined;
    }
    if (object.actHash !== undefined && object.actHash !== null) {
      message.actHash = object.actHash;
    } else {
      message.actHash = "";
    }
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = object.blkHash;
    } else {
      message.blkHash = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    if (object.blkHeight !== undefined && object.blkHeight !== null) {
      message.blkHeight = object.blkHeight;
    } else {
      message.blkHeight = 0;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.gasFee !== undefined && object.gasFee !== null) {
      message.gasFee = object.gasFee;
    } else {
      message.gasFee = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    return message;
  },
};

const baseReceiptInfo: object = { blkHash: "" };

export const ReceiptInfo = {
  encode(
    message: ReceiptInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receipt !== undefined) {
      Receipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
    }
    if (message.blkHash !== "") {
      writer.uint32(18).string(message.blkHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceiptInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReceiptInfo } as ReceiptInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receipt = Receipt.decode(reader, reader.uint32());
          break;
        case 2:
          message.blkHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReceiptInfo {
    const message = { ...baseReceiptInfo } as ReceiptInfo;
    if (object.receipt !== undefined && object.receipt !== null) {
      message.receipt = Receipt.fromJSON(object.receipt);
    } else {
      message.receipt = undefined;
    }
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = String(object.blkHash);
    } else {
      message.blkHash = "";
    }
    return message;
  },

  toJSON(message: ReceiptInfo): unknown {
    const obj: any = {};
    message.receipt !== undefined &&
      (obj.receipt = message.receipt
        ? Receipt.toJSON(message.receipt)
        : undefined);
    message.blkHash !== undefined && (obj.blkHash = message.blkHash);
    return obj;
  },

  fromPartial(object: DeepPartial<ReceiptInfo>): ReceiptInfo {
    const message = { ...baseReceiptInfo } as ReceiptInfo;
    if (object.receipt !== undefined && object.receipt !== null) {
      message.receipt = Receipt.fromPartial(object.receipt);
    } else {
      message.receipt = undefined;
    }
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = object.blkHash;
    } else {
      message.blkHash = "";
    }
    return message;
  },
};

const baseBlockProducerInfo: object = {
  address: "",
  votes: "",
  active: false,
  production: 0,
};

export const BlockProducerInfo = {
  encode(
    message: BlockProducerInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.votes !== "") {
      writer.uint32(18).string(message.votes);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.production !== 0) {
      writer.uint32(32).uint64(message.production);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockProducerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockProducerInfo } as BlockProducerInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.votes = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        case 4:
          message.production = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockProducerInfo {
    const message = { ...baseBlockProducerInfo } as BlockProducerInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = String(object.votes);
    } else {
      message.votes = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Boolean(object.active);
    } else {
      message.active = false;
    }
    if (object.production !== undefined && object.production !== null) {
      message.production = Number(object.production);
    } else {
      message.production = 0;
    }
    return message;
  },

  toJSON(message: BlockProducerInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.votes !== undefined && (obj.votes = message.votes);
    message.active !== undefined && (obj.active = message.active);
    message.production !== undefined && (obj.production = message.production);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockProducerInfo>): BlockProducerInfo {
    const message = { ...baseBlockProducerInfo } as BlockProducerInfo;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = object.votes;
    } else {
      message.votes = "";
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = false;
    }
    if (object.production !== undefined && object.production !== null) {
      message.production = object.production;
    } else {
      message.production = 0;
    }
    return message;
  },
};

const baseBlockInfo: object = {};

export const BlockInfo = {
  encode(
    message: BlockInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.transactionLogs !== undefined) {
      TransactionLogs.encode(
        message.transactionLogs,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockInfo } as BlockInfo;
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
        case 3:
          message.transactionLogs = TransactionLogs.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockInfo {
    const message = { ...baseBlockInfo } as BlockInfo;
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
    if (
      object.transactionLogs !== undefined &&
      object.transactionLogs !== null
    ) {
      message.transactionLogs = TransactionLogs.fromJSON(
        object.transactionLogs
      );
    } else {
      message.transactionLogs = undefined;
    }
    return message;
  },

  toJSON(message: BlockInfo): unknown {
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
    message.transactionLogs !== undefined &&
      (obj.transactionLogs = message.transactionLogs
        ? TransactionLogs.toJSON(message.transactionLogs)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BlockInfo>): BlockInfo {
    const message = { ...baseBlockInfo } as BlockInfo;
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
    if (
      object.transactionLogs !== undefined &&
      object.transactionLogs !== null
    ) {
      message.transactionLogs = TransactionLogs.fromPartial(
        object.transactionLogs
      );
    } else {
      message.transactionLogs = undefined;
    }
    return message;
  },
};

const baseGetActionsResponse: object = { total: 0 };

export const GetActionsResponse = {
  encode(
    message: GetActionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(16).uint64(message.total);
    }
    for (const v of message.actionInfo) {
      ActionInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetActionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetActionsResponse } as GetActionsResponse;
    message.actionInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        case 1:
          message.actionInfo.push(ActionInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActionsResponse {
    const message = { ...baseGetActionsResponse } as GetActionsResponse;
    message.actionInfo = [];
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    if (object.actionInfo !== undefined && object.actionInfo !== null) {
      for (const e of object.actionInfo) {
        message.actionInfo.push(ActionInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetActionsResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    if (message.actionInfo) {
      obj.actionInfo = message.actionInfo.map((e) =>
        e ? ActionInfo.toJSON(e) : undefined
      );
    } else {
      obj.actionInfo = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetActionsResponse>): GetActionsResponse {
    const message = { ...baseGetActionsResponse } as GetActionsResponse;
    message.actionInfo = [];
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.actionInfo !== undefined && object.actionInfo !== null) {
      for (const e of object.actionInfo) {
        message.actionInfo.push(ActionInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetBlockMetasRequest: object = {};

export const GetBlockMetasRequest = {
  encode(
    message: GetBlockMetasRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byIndex !== undefined) {
      GetBlockMetasByIndexRequest.encode(
        message.byIndex,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.byHash !== undefined) {
      GetBlockMetaByHashRequest.encode(
        message.byHash,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockMetasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBlockMetasRequest } as GetBlockMetasRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byIndex = GetBlockMetasByIndexRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.byHash = GetBlockMetaByHashRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockMetasRequest {
    const message = { ...baseGetBlockMetasRequest } as GetBlockMetasRequest;
    if (object.byIndex !== undefined && object.byIndex !== null) {
      message.byIndex = GetBlockMetasByIndexRequest.fromJSON(object.byIndex);
    } else {
      message.byIndex = undefined;
    }
    if (object.byHash !== undefined && object.byHash !== null) {
      message.byHash = GetBlockMetaByHashRequest.fromJSON(object.byHash);
    } else {
      message.byHash = undefined;
    }
    return message;
  },

  toJSON(message: GetBlockMetasRequest): unknown {
    const obj: any = {};
    message.byIndex !== undefined &&
      (obj.byIndex = message.byIndex
        ? GetBlockMetasByIndexRequest.toJSON(message.byIndex)
        : undefined);
    message.byHash !== undefined &&
      (obj.byHash = message.byHash
        ? GetBlockMetaByHashRequest.toJSON(message.byHash)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetBlockMetasRequest>): GetBlockMetasRequest {
    const message = { ...baseGetBlockMetasRequest } as GetBlockMetasRequest;
    if (object.byIndex !== undefined && object.byIndex !== null) {
      message.byIndex = GetBlockMetasByIndexRequest.fromPartial(object.byIndex);
    } else {
      message.byIndex = undefined;
    }
    if (object.byHash !== undefined && object.byHash !== null) {
      message.byHash = GetBlockMetaByHashRequest.fromPartial(object.byHash);
    } else {
      message.byHash = undefined;
    }
    return message;
  },
};

const baseGetBlockMetasByIndexRequest: object = { start: 0, count: 0 };

export const GetBlockMetasByIndexRequest = {
  encode(
    message: GetBlockMetasByIndexRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).uint64(message.start);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockMetasByIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBlockMetasByIndexRequest,
    } as GetBlockMetasByIndexRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockMetasByIndexRequest {
    const message = {
      ...baseGetBlockMetasByIndexRequest,
    } as GetBlockMetasByIndexRequest;
    if (object.start !== undefined && object.start !== null) {
      message.start = Number(object.start);
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: GetBlockMetasByIndexRequest): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBlockMetasByIndexRequest>
  ): GetBlockMetasByIndexRequest {
    const message = {
      ...baseGetBlockMetasByIndexRequest,
    } as GetBlockMetasByIndexRequest;
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    } else {
      message.start = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseGetBlockMetaByHashRequest: object = { blkHash: "" };

export const GetBlockMetaByHashRequest = {
  encode(
    message: GetBlockMetaByHashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blkHash !== "") {
      writer.uint32(10).string(message.blkHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockMetaByHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetBlockMetaByHashRequest,
    } as GetBlockMetaByHashRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blkHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockMetaByHashRequest {
    const message = {
      ...baseGetBlockMetaByHashRequest,
    } as GetBlockMetaByHashRequest;
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = String(object.blkHash);
    } else {
      message.blkHash = "";
    }
    return message;
  },

  toJSON(message: GetBlockMetaByHashRequest): unknown {
    const obj: any = {};
    message.blkHash !== undefined && (obj.blkHash = message.blkHash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBlockMetaByHashRequest>
  ): GetBlockMetaByHashRequest {
    const message = {
      ...baseGetBlockMetaByHashRequest,
    } as GetBlockMetaByHashRequest;
    if (object.blkHash !== undefined && object.blkHash !== null) {
      message.blkHash = object.blkHash;
    } else {
      message.blkHash = "";
    }
    return message;
  },
};

const baseGetBlockMetasResponse: object = { total: 0 };

export const GetBlockMetasResponse = {
  encode(
    message: GetBlockMetasResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(16).uint64(message.total);
    }
    for (const v of message.blkMetas) {
      BlockMeta.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBlockMetasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBlockMetasResponse } as GetBlockMetasResponse;
    message.blkMetas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        case 1:
          message.blkMetas.push(BlockMeta.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockMetasResponse {
    const message = { ...baseGetBlockMetasResponse } as GetBlockMetasResponse;
    message.blkMetas = [];
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    if (object.blkMetas !== undefined && object.blkMetas !== null) {
      for (const e of object.blkMetas) {
        message.blkMetas.push(BlockMeta.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetBlockMetasResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    if (message.blkMetas) {
      obj.blkMetas = message.blkMetas.map((e) =>
        e ? BlockMeta.toJSON(e) : undefined
      );
    } else {
      obj.blkMetas = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBlockMetasResponse>
  ): GetBlockMetasResponse {
    const message = { ...baseGetBlockMetasResponse } as GetBlockMetasResponse;
    message.blkMetas = [];
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.blkMetas !== undefined && object.blkMetas !== null) {
      for (const e of object.blkMetas) {
        message.blkMetas.push(BlockMeta.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetChainMetaRequest: object = {};

export const GetChainMetaRequest = {
  encode(
    _: GetChainMetaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetChainMetaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetChainMetaRequest } as GetChainMetaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetChainMetaRequest {
    const message = { ...baseGetChainMetaRequest } as GetChainMetaRequest;
    return message;
  },

  toJSON(_: GetChainMetaRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetChainMetaRequest>): GetChainMetaRequest {
    const message = { ...baseGetChainMetaRequest } as GetChainMetaRequest;
    return message;
  },
};

const baseGetChainMetaResponse: object = { syncStage: "" };

export const GetChainMetaResponse = {
  encode(
    message: GetChainMetaResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainMeta !== undefined) {
      ChainMeta.encode(message.chainMeta, writer.uint32(10).fork()).ldelim();
    }
    if (message.syncStage !== "") {
      writer.uint32(18).string(message.syncStage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetChainMetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetChainMetaResponse } as GetChainMetaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainMeta = ChainMeta.decode(reader, reader.uint32());
          break;
        case 2:
          message.syncStage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetChainMetaResponse {
    const message = { ...baseGetChainMetaResponse } as GetChainMetaResponse;
    if (object.chainMeta !== undefined && object.chainMeta !== null) {
      message.chainMeta = ChainMeta.fromJSON(object.chainMeta);
    } else {
      message.chainMeta = undefined;
    }
    if (object.syncStage !== undefined && object.syncStage !== null) {
      message.syncStage = String(object.syncStage);
    } else {
      message.syncStage = "";
    }
    return message;
  },

  toJSON(message: GetChainMetaResponse): unknown {
    const obj: any = {};
    message.chainMeta !== undefined &&
      (obj.chainMeta = message.chainMeta
        ? ChainMeta.toJSON(message.chainMeta)
        : undefined);
    message.syncStage !== undefined && (obj.syncStage = message.syncStage);
    return obj;
  },

  fromPartial(object: DeepPartial<GetChainMetaResponse>): GetChainMetaResponse {
    const message = { ...baseGetChainMetaResponse } as GetChainMetaResponse;
    if (object.chainMeta !== undefined && object.chainMeta !== null) {
      message.chainMeta = ChainMeta.fromPartial(object.chainMeta);
    } else {
      message.chainMeta = undefined;
    }
    if (object.syncStage !== undefined && object.syncStage !== null) {
      message.syncStage = object.syncStage;
    } else {
      message.syncStage = "";
    }
    return message;
  },
};

const baseGetServerMetaRequest: object = {};

export const GetServerMetaRequest = {
  encode(
    _: GetServerMetaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetServerMetaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetServerMetaRequest } as GetServerMetaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetServerMetaRequest {
    const message = { ...baseGetServerMetaRequest } as GetServerMetaRequest;
    return message;
  },

  toJSON(_: GetServerMetaRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetServerMetaRequest>): GetServerMetaRequest {
    const message = { ...baseGetServerMetaRequest } as GetServerMetaRequest;
    return message;
  },
};

const baseGetServerMetaResponse: object = {};

export const GetServerMetaResponse = {
  encode(
    message: GetServerMetaResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serverMeta !== undefined) {
      ServerMeta.encode(message.serverMeta, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetServerMetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetServerMetaResponse } as GetServerMetaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverMeta = ServerMeta.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetServerMetaResponse {
    const message = { ...baseGetServerMetaResponse } as GetServerMetaResponse;
    if (object.serverMeta !== undefined && object.serverMeta !== null) {
      message.serverMeta = ServerMeta.fromJSON(object.serverMeta);
    } else {
      message.serverMeta = undefined;
    }
    return message;
  },

  toJSON(message: GetServerMetaResponse): unknown {
    const obj: any = {};
    message.serverMeta !== undefined &&
      (obj.serverMeta = message.serverMeta
        ? ServerMeta.toJSON(message.serverMeta)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetServerMetaResponse>
  ): GetServerMetaResponse {
    const message = { ...baseGetServerMetaResponse } as GetServerMetaResponse;
    if (object.serverMeta !== undefined && object.serverMeta !== null) {
      message.serverMeta = ServerMeta.fromPartial(object.serverMeta);
    } else {
      message.serverMeta = undefined;
    }
    return message;
  },
};

const baseSendActionRequest: object = {};

export const SendActionRequest = {
  encode(
    message: SendActionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendActionRequest } as SendActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendActionRequest {
    const message = { ...baseSendActionRequest } as SendActionRequest;
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromJSON(object.action);
    } else {
      message.action = undefined;
    }
    return message;
  },

  toJSON(message: SendActionRequest): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SendActionRequest>): SendActionRequest {
    const message = { ...baseSendActionRequest } as SendActionRequest;
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromPartial(object.action);
    } else {
      message.action = undefined;
    }
    return message;
  },
};

const baseSendSignedActionBytesRequest: object = { signedActionBytes: "" };

export const SendSignedActionBytesRequest = {
  encode(
    message: SendSignedActionBytesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signedActionBytes !== "") {
      writer.uint32(10).string(message.signedActionBytes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendSignedActionBytesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSendSignedActionBytesRequest,
    } as SendSignedActionBytesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedActionBytes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendSignedActionBytesRequest {
    const message = {
      ...baseSendSignedActionBytesRequest,
    } as SendSignedActionBytesRequest;
    if (
      object.signedActionBytes !== undefined &&
      object.signedActionBytes !== null
    ) {
      message.signedActionBytes = String(object.signedActionBytes);
    } else {
      message.signedActionBytes = "";
    }
    return message;
  },

  toJSON(message: SendSignedActionBytesRequest): unknown {
    const obj: any = {};
    message.signedActionBytes !== undefined &&
      (obj.signedActionBytes = message.signedActionBytes);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SendSignedActionBytesRequest>
  ): SendSignedActionBytesRequest {
    const message = {
      ...baseSendSignedActionBytesRequest,
    } as SendSignedActionBytesRequest;
    if (
      object.signedActionBytes !== undefined &&
      object.signedActionBytes !== null
    ) {
      message.signedActionBytes = object.signedActionBytes;
    } else {
      message.signedActionBytes = "";
    }
    return message;
  },
};

const baseSendActionResponse: object = { actionHash: "" };

export const SendActionResponse = {
  encode(
    message: SendActionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionHash !== "") {
      writer.uint32(10).string(message.actionHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendActionResponse } as SendActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendActionResponse {
    const message = { ...baseSendActionResponse } as SendActionResponse;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = String(object.actionHash);
    } else {
      message.actionHash = "";
    }
    return message;
  },

  toJSON(message: SendActionResponse): unknown {
    const obj: any = {};
    message.actionHash !== undefined && (obj.actionHash = message.actionHash);
    return obj;
  },

  fromPartial(object: DeepPartial<SendActionResponse>): SendActionResponse {
    const message = { ...baseSendActionResponse } as SendActionResponse;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = object.actionHash;
    } else {
      message.actionHash = "";
    }
    return message;
  },
};

const baseGetReceiptByActionRequest: object = { actionHash: "" };

export const GetReceiptByActionRequest = {
  encode(
    message: GetReceiptByActionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionHash !== "") {
      writer.uint32(10).string(message.actionHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetReceiptByActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetReceiptByActionRequest,
    } as GetReceiptByActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetReceiptByActionRequest {
    const message = {
      ...baseGetReceiptByActionRequest,
    } as GetReceiptByActionRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = String(object.actionHash);
    } else {
      message.actionHash = "";
    }
    return message;
  },

  toJSON(message: GetReceiptByActionRequest): unknown {
    const obj: any = {};
    message.actionHash !== undefined && (obj.actionHash = message.actionHash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetReceiptByActionRequest>
  ): GetReceiptByActionRequest {
    const message = {
      ...baseGetReceiptByActionRequest,
    } as GetReceiptByActionRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = object.actionHash;
    } else {
      message.actionHash = "";
    }
    return message;
  },
};

const baseGetReceiptByActionResponse: object = {};

export const GetReceiptByActionResponse = {
  encode(
    message: GetReceiptByActionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiptInfo !== undefined) {
      ReceiptInfo.encode(
        message.receiptInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetReceiptByActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetReceiptByActionResponse,
    } as GetReceiptByActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiptInfo = ReceiptInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetReceiptByActionResponse {
    const message = {
      ...baseGetReceiptByActionResponse,
    } as GetReceiptByActionResponse;
    if (object.receiptInfo !== undefined && object.receiptInfo !== null) {
      message.receiptInfo = ReceiptInfo.fromJSON(object.receiptInfo);
    } else {
      message.receiptInfo = undefined;
    }
    return message;
  },

  toJSON(message: GetReceiptByActionResponse): unknown {
    const obj: any = {};
    message.receiptInfo !== undefined &&
      (obj.receiptInfo = message.receiptInfo
        ? ReceiptInfo.toJSON(message.receiptInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetReceiptByActionResponse>
  ): GetReceiptByActionResponse {
    const message = {
      ...baseGetReceiptByActionResponse,
    } as GetReceiptByActionResponse;
    if (object.receiptInfo !== undefined && object.receiptInfo !== null) {
      message.receiptInfo = ReceiptInfo.fromPartial(object.receiptInfo);
    } else {
      message.receiptInfo = undefined;
    }
    return message;
  },
};

const baseReadContractRequest: object = { callerAddress: "" };

export const ReadContractRequest = {
  encode(
    message: ReadContractRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.execution !== undefined) {
      Execution.encode(message.execution, writer.uint32(10).fork()).ldelim();
    }
    if (message.callerAddress !== "") {
      writer.uint32(18).string(message.callerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadContractRequest } as ReadContractRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.execution = Execution.decode(reader, reader.uint32());
          break;
        case 2:
          message.callerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadContractRequest {
    const message = { ...baseReadContractRequest } as ReadContractRequest;
    if (object.execution !== undefined && object.execution !== null) {
      message.execution = Execution.fromJSON(object.execution);
    } else {
      message.execution = undefined;
    }
    if (object.callerAddress !== undefined && object.callerAddress !== null) {
      message.callerAddress = String(object.callerAddress);
    } else {
      message.callerAddress = "";
    }
    return message;
  },

  toJSON(message: ReadContractRequest): unknown {
    const obj: any = {};
    message.execution !== undefined &&
      (obj.execution = message.execution
        ? Execution.toJSON(message.execution)
        : undefined);
    message.callerAddress !== undefined &&
      (obj.callerAddress = message.callerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadContractRequest>): ReadContractRequest {
    const message = { ...baseReadContractRequest } as ReadContractRequest;
    if (object.execution !== undefined && object.execution !== null) {
      message.execution = Execution.fromPartial(object.execution);
    } else {
      message.execution = undefined;
    }
    if (object.callerAddress !== undefined && object.callerAddress !== null) {
      message.callerAddress = object.callerAddress;
    } else {
      message.callerAddress = "";
    }
    return message;
  },
};

const baseReadContractResponse: object = { data: "" };

export const ReadContractResponse = {
  encode(
    message: ReadContractResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.receipt !== undefined) {
      Receipt.encode(message.receipt, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadContractResponse } as ReadContractResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.receipt = Receipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadContractResponse {
    const message = { ...baseReadContractResponse } as ReadContractResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.receipt !== undefined && object.receipt !== null) {
      message.receipt = Receipt.fromJSON(object.receipt);
    } else {
      message.receipt = undefined;
    }
    return message;
  },

  toJSON(message: ReadContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.receipt !== undefined &&
      (obj.receipt = message.receipt
        ? Receipt.toJSON(message.receipt)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadContractResponse>): ReadContractResponse {
    const message = { ...baseReadContractResponse } as ReadContractResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.receipt !== undefined && object.receipt !== null) {
      message.receipt = Receipt.fromPartial(object.receipt);
    } else {
      message.receipt = undefined;
    }
    return message;
  },
};

const baseSuggestGasPriceRequest: object = {};

export const SuggestGasPriceRequest = {
  encode(
    _: SuggestGasPriceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuggestGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSuggestGasPriceRequest } as SuggestGasPriceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SuggestGasPriceRequest {
    const message = { ...baseSuggestGasPriceRequest } as SuggestGasPriceRequest;
    return message;
  },

  toJSON(_: SuggestGasPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SuggestGasPriceRequest>): SuggestGasPriceRequest {
    const message = { ...baseSuggestGasPriceRequest } as SuggestGasPriceRequest;
    return message;
  },
};

const baseSuggestGasPriceResponse: object = { gasPrice: 0 };

export const SuggestGasPriceResponse = {
  encode(
    message: SuggestGasPriceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gasPrice !== 0) {
      writer.uint32(8).uint64(message.gasPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SuggestGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSuggestGasPriceResponse,
    } as SuggestGasPriceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasPrice = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuggestGasPriceResponse {
    const message = {
      ...baseSuggestGasPriceResponse,
    } as SuggestGasPriceResponse;
    if (object.gasPrice !== undefined && object.gasPrice !== null) {
      message.gasPrice = Number(object.gasPrice);
    } else {
      message.gasPrice = 0;
    }
    return message;
  },

  toJSON(message: SuggestGasPriceResponse): unknown {
    const obj: any = {};
    message.gasPrice !== undefined && (obj.gasPrice = message.gasPrice);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SuggestGasPriceResponse>
  ): SuggestGasPriceResponse {
    const message = {
      ...baseSuggestGasPriceResponse,
    } as SuggestGasPriceResponse;
    if (object.gasPrice !== undefined && object.gasPrice !== null) {
      message.gasPrice = object.gasPrice;
    } else {
      message.gasPrice = 0;
    }
    return message;
  },
};

const baseEstimateGasForActionRequest: object = {};

export const EstimateGasForActionRequest = {
  encode(
    message: EstimateGasForActionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateGasForActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateGasForActionRequest,
    } as EstimateGasForActionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = Action.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateGasForActionRequest {
    const message = {
      ...baseEstimateGasForActionRequest,
    } as EstimateGasForActionRequest;
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromJSON(object.action);
    } else {
      message.action = undefined;
    }
    return message;
  },

  toJSON(message: EstimateGasForActionRequest): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = message.action ? Action.toJSON(message.action) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateGasForActionRequest>
  ): EstimateGasForActionRequest {
    const message = {
      ...baseEstimateGasForActionRequest,
    } as EstimateGasForActionRequest;
    if (object.action !== undefined && object.action !== null) {
      message.action = Action.fromPartial(object.action);
    } else {
      message.action = undefined;
    }
    return message;
  },
};

const baseEstimateActionGasConsumptionRequest: object = { callerAddress: "" };

export const EstimateActionGasConsumptionRequest = {
  encode(
    message: EstimateActionGasConsumptionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transfer !== undefined) {
      Transfer.encode(message.transfer, writer.uint32(10).fork()).ldelim();
    }
    if (message.execution !== undefined) {
      Execution.encode(message.execution, writer.uint32(18).fork()).ldelim();
    }
    if (message.stakeCreate !== undefined) {
      StakeCreate.encode(
        message.stakeCreate,
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.stakeUnstake !== undefined) {
      StakeReclaim.encode(
        message.stakeUnstake,
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.stakeWithdraw !== undefined) {
      StakeReclaim.encode(
        message.stakeWithdraw,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.stakeAddDeposit !== undefined) {
      StakeAddDeposit.encode(
        message.stakeAddDeposit,
        writer.uint32(346).fork()
      ).ldelim();
    }
    if (message.stakeRestake !== undefined) {
      StakeRestake.encode(
        message.stakeRestake,
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.stakeChangeCandidate !== undefined) {
      StakeChangeCandidate.encode(
        message.stakeChangeCandidate,
        writer.uint32(362).fork()
      ).ldelim();
    }
    if (message.stakeTransferOwnership !== undefined) {
      StakeTransferOwnership.encode(
        message.stakeTransferOwnership,
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.candidateRegister !== undefined) {
      CandidateRegister.encode(
        message.candidateRegister,
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.candidateUpdate !== undefined) {
      CandidateBasicInfo.encode(
        message.candidateUpdate,
        writer.uint32(386).fork()
      ).ldelim();
    }
    if (message.callerAddress !== "") {
      writer.uint32(802).string(message.callerAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateActionGasConsumptionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateActionGasConsumptionRequest,
    } as EstimateActionGasConsumptionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfer = Transfer.decode(reader, reader.uint32());
          break;
        case 2:
          message.execution = Execution.decode(reader, reader.uint32());
          break;
        case 40:
          message.stakeCreate = StakeCreate.decode(reader, reader.uint32());
          break;
        case 41:
          message.stakeUnstake = StakeReclaim.decode(reader, reader.uint32());
          break;
        case 42:
          message.stakeWithdraw = StakeReclaim.decode(reader, reader.uint32());
          break;
        case 43:
          message.stakeAddDeposit = StakeAddDeposit.decode(
            reader,
            reader.uint32()
          );
          break;
        case 44:
          message.stakeRestake = StakeRestake.decode(reader, reader.uint32());
          break;
        case 45:
          message.stakeChangeCandidate = StakeChangeCandidate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 46:
          message.stakeTransferOwnership = StakeTransferOwnership.decode(
            reader,
            reader.uint32()
          );
          break;
        case 47:
          message.candidateRegister = CandidateRegister.decode(
            reader,
            reader.uint32()
          );
          break;
        case 48:
          message.candidateUpdate = CandidateBasicInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 100:
          message.callerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateActionGasConsumptionRequest {
    const message = {
      ...baseEstimateActionGasConsumptionRequest,
    } as EstimateActionGasConsumptionRequest;
    if (object.transfer !== undefined && object.transfer !== null) {
      message.transfer = Transfer.fromJSON(object.transfer);
    } else {
      message.transfer = undefined;
    }
    if (object.execution !== undefined && object.execution !== null) {
      message.execution = Execution.fromJSON(object.execution);
    } else {
      message.execution = undefined;
    }
    if (object.stakeCreate !== undefined && object.stakeCreate !== null) {
      message.stakeCreate = StakeCreate.fromJSON(object.stakeCreate);
    } else {
      message.stakeCreate = undefined;
    }
    if (object.stakeUnstake !== undefined && object.stakeUnstake !== null) {
      message.stakeUnstake = StakeReclaim.fromJSON(object.stakeUnstake);
    } else {
      message.stakeUnstake = undefined;
    }
    if (object.stakeWithdraw !== undefined && object.stakeWithdraw !== null) {
      message.stakeWithdraw = StakeReclaim.fromJSON(object.stakeWithdraw);
    } else {
      message.stakeWithdraw = undefined;
    }
    if (
      object.stakeAddDeposit !== undefined &&
      object.stakeAddDeposit !== null
    ) {
      message.stakeAddDeposit = StakeAddDeposit.fromJSON(
        object.stakeAddDeposit
      );
    } else {
      message.stakeAddDeposit = undefined;
    }
    if (object.stakeRestake !== undefined && object.stakeRestake !== null) {
      message.stakeRestake = StakeRestake.fromJSON(object.stakeRestake);
    } else {
      message.stakeRestake = undefined;
    }
    if (
      object.stakeChangeCandidate !== undefined &&
      object.stakeChangeCandidate !== null
    ) {
      message.stakeChangeCandidate = StakeChangeCandidate.fromJSON(
        object.stakeChangeCandidate
      );
    } else {
      message.stakeChangeCandidate = undefined;
    }
    if (
      object.stakeTransferOwnership !== undefined &&
      object.stakeTransferOwnership !== null
    ) {
      message.stakeTransferOwnership = StakeTransferOwnership.fromJSON(
        object.stakeTransferOwnership
      );
    } else {
      message.stakeTransferOwnership = undefined;
    }
    if (
      object.candidateRegister !== undefined &&
      object.candidateRegister !== null
    ) {
      message.candidateRegister = CandidateRegister.fromJSON(
        object.candidateRegister
      );
    } else {
      message.candidateRegister = undefined;
    }
    if (
      object.candidateUpdate !== undefined &&
      object.candidateUpdate !== null
    ) {
      message.candidateUpdate = CandidateBasicInfo.fromJSON(
        object.candidateUpdate
      );
    } else {
      message.candidateUpdate = undefined;
    }
    if (object.callerAddress !== undefined && object.callerAddress !== null) {
      message.callerAddress = String(object.callerAddress);
    } else {
      message.callerAddress = "";
    }
    return message;
  },

  toJSON(message: EstimateActionGasConsumptionRequest): unknown {
    const obj: any = {};
    message.transfer !== undefined &&
      (obj.transfer = message.transfer
        ? Transfer.toJSON(message.transfer)
        : undefined);
    message.execution !== undefined &&
      (obj.execution = message.execution
        ? Execution.toJSON(message.execution)
        : undefined);
    message.stakeCreate !== undefined &&
      (obj.stakeCreate = message.stakeCreate
        ? StakeCreate.toJSON(message.stakeCreate)
        : undefined);
    message.stakeUnstake !== undefined &&
      (obj.stakeUnstake = message.stakeUnstake
        ? StakeReclaim.toJSON(message.stakeUnstake)
        : undefined);
    message.stakeWithdraw !== undefined &&
      (obj.stakeWithdraw = message.stakeWithdraw
        ? StakeReclaim.toJSON(message.stakeWithdraw)
        : undefined);
    message.stakeAddDeposit !== undefined &&
      (obj.stakeAddDeposit = message.stakeAddDeposit
        ? StakeAddDeposit.toJSON(message.stakeAddDeposit)
        : undefined);
    message.stakeRestake !== undefined &&
      (obj.stakeRestake = message.stakeRestake
        ? StakeRestake.toJSON(message.stakeRestake)
        : undefined);
    message.stakeChangeCandidate !== undefined &&
      (obj.stakeChangeCandidate = message.stakeChangeCandidate
        ? StakeChangeCandidate.toJSON(message.stakeChangeCandidate)
        : undefined);
    message.stakeTransferOwnership !== undefined &&
      (obj.stakeTransferOwnership = message.stakeTransferOwnership
        ? StakeTransferOwnership.toJSON(message.stakeTransferOwnership)
        : undefined);
    message.candidateRegister !== undefined &&
      (obj.candidateRegister = message.candidateRegister
        ? CandidateRegister.toJSON(message.candidateRegister)
        : undefined);
    message.candidateUpdate !== undefined &&
      (obj.candidateUpdate = message.candidateUpdate
        ? CandidateBasicInfo.toJSON(message.candidateUpdate)
        : undefined);
    message.callerAddress !== undefined &&
      (obj.callerAddress = message.callerAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateActionGasConsumptionRequest>
  ): EstimateActionGasConsumptionRequest {
    const message = {
      ...baseEstimateActionGasConsumptionRequest,
    } as EstimateActionGasConsumptionRequest;
    if (object.transfer !== undefined && object.transfer !== null) {
      message.transfer = Transfer.fromPartial(object.transfer);
    } else {
      message.transfer = undefined;
    }
    if (object.execution !== undefined && object.execution !== null) {
      message.execution = Execution.fromPartial(object.execution);
    } else {
      message.execution = undefined;
    }
    if (object.stakeCreate !== undefined && object.stakeCreate !== null) {
      message.stakeCreate = StakeCreate.fromPartial(object.stakeCreate);
    } else {
      message.stakeCreate = undefined;
    }
    if (object.stakeUnstake !== undefined && object.stakeUnstake !== null) {
      message.stakeUnstake = StakeReclaim.fromPartial(object.stakeUnstake);
    } else {
      message.stakeUnstake = undefined;
    }
    if (object.stakeWithdraw !== undefined && object.stakeWithdraw !== null) {
      message.stakeWithdraw = StakeReclaim.fromPartial(object.stakeWithdraw);
    } else {
      message.stakeWithdraw = undefined;
    }
    if (
      object.stakeAddDeposit !== undefined &&
      object.stakeAddDeposit !== null
    ) {
      message.stakeAddDeposit = StakeAddDeposit.fromPartial(
        object.stakeAddDeposit
      );
    } else {
      message.stakeAddDeposit = undefined;
    }
    if (object.stakeRestake !== undefined && object.stakeRestake !== null) {
      message.stakeRestake = StakeRestake.fromPartial(object.stakeRestake);
    } else {
      message.stakeRestake = undefined;
    }
    if (
      object.stakeChangeCandidate !== undefined &&
      object.stakeChangeCandidate !== null
    ) {
      message.stakeChangeCandidate = StakeChangeCandidate.fromPartial(
        object.stakeChangeCandidate
      );
    } else {
      message.stakeChangeCandidate = undefined;
    }
    if (
      object.stakeTransferOwnership !== undefined &&
      object.stakeTransferOwnership !== null
    ) {
      message.stakeTransferOwnership = StakeTransferOwnership.fromPartial(
        object.stakeTransferOwnership
      );
    } else {
      message.stakeTransferOwnership = undefined;
    }
    if (
      object.candidateRegister !== undefined &&
      object.candidateRegister !== null
    ) {
      message.candidateRegister = CandidateRegister.fromPartial(
        object.candidateRegister
      );
    } else {
      message.candidateRegister = undefined;
    }
    if (
      object.candidateUpdate !== undefined &&
      object.candidateUpdate !== null
    ) {
      message.candidateUpdate = CandidateBasicInfo.fromPartial(
        object.candidateUpdate
      );
    } else {
      message.candidateUpdate = undefined;
    }
    if (object.callerAddress !== undefined && object.callerAddress !== null) {
      message.callerAddress = object.callerAddress;
    } else {
      message.callerAddress = "";
    }
    return message;
  },
};

const baseEstimateActionGasConsumptionResponse: object = { gas: 0 };

export const EstimateActionGasConsumptionResponse = {
  encode(
    message: EstimateActionGasConsumptionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gas !== 0) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateActionGasConsumptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateActionGasConsumptionResponse,
    } as EstimateActionGasConsumptionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateActionGasConsumptionResponse {
    const message = {
      ...baseEstimateActionGasConsumptionResponse,
    } as EstimateActionGasConsumptionResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    return message;
  },

  toJSON(message: EstimateActionGasConsumptionResponse): unknown {
    const obj: any = {};
    message.gas !== undefined && (obj.gas = message.gas);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateActionGasConsumptionResponse>
  ): EstimateActionGasConsumptionResponse {
    const message = {
      ...baseEstimateActionGasConsumptionResponse,
    } as EstimateActionGasConsumptionResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    return message;
  },
};

const baseEstimateGasForActionResponse: object = { gas: 0 };

export const EstimateGasForActionResponse = {
  encode(
    message: EstimateGasForActionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gas !== 0) {
      writer.uint32(8).uint64(message.gas);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateGasForActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateGasForActionResponse,
    } as EstimateGasForActionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateGasForActionResponse {
    const message = {
      ...baseEstimateGasForActionResponse,
    } as EstimateGasForActionResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    return message;
  },

  toJSON(message: EstimateGasForActionResponse): unknown {
    const obj: any = {};
    message.gas !== undefined && (obj.gas = message.gas);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateGasForActionResponse>
  ): EstimateGasForActionResponse {
    const message = {
      ...baseEstimateGasForActionResponse,
    } as EstimateGasForActionResponse;
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    return message;
  },
};

const baseReadStateRequest: object = { height: "" };

export const ReadStateRequest = {
  encode(
    message: ReadStateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.protocolID.length !== 0) {
      writer.uint32(10).bytes(message.protocolID);
    }
    if (message.methodName.length !== 0) {
      writer.uint32(18).bytes(message.methodName);
    }
    for (const v of message.arguments) {
      writer.uint32(26).bytes(v!);
    }
    if (message.height !== "") {
      writer.uint32(34).string(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadStateRequest } as ReadStateRequest;
    message.arguments = [];
    message.protocolID = new Uint8Array();
    message.methodName = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolID = reader.bytes();
          break;
        case 2:
          message.methodName = reader.bytes();
          break;
        case 3:
          message.arguments.push(reader.bytes());
          break;
        case 4:
          message.height = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStateRequest {
    const message = { ...baseReadStateRequest } as ReadStateRequest;
    message.arguments = [];
    message.protocolID = new Uint8Array();
    message.methodName = new Uint8Array();
    if (object.protocolID !== undefined && object.protocolID !== null) {
      message.protocolID = bytesFromBase64(object.protocolID);
    }
    if (object.methodName !== undefined && object.methodName !== null) {
      message.methodName = bytesFromBase64(object.methodName);
    }
    if (object.arguments !== undefined && object.arguments !== null) {
      for (const e of object.arguments) {
        message.arguments.push(bytesFromBase64(e));
      }
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = String(object.height);
    } else {
      message.height = "";
    }
    return message;
  },

  toJSON(message: ReadStateRequest): unknown {
    const obj: any = {};
    message.protocolID !== undefined &&
      (obj.protocolID = base64FromBytes(
        message.protocolID !== undefined ? message.protocolID : new Uint8Array()
      ));
    message.methodName !== undefined &&
      (obj.methodName = base64FromBytes(
        message.methodName !== undefined ? message.methodName : new Uint8Array()
      ));
    if (message.arguments) {
      obj.arguments = message.arguments.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.arguments = [];
    }
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadStateRequest>): ReadStateRequest {
    const message = { ...baseReadStateRequest } as ReadStateRequest;
    message.arguments = [];
    if (object.protocolID !== undefined && object.protocolID !== null) {
      message.protocolID = object.protocolID;
    } else {
      message.protocolID = new Uint8Array();
    }
    if (object.methodName !== undefined && object.methodName !== null) {
      message.methodName = object.methodName;
    } else {
      message.methodName = new Uint8Array();
    }
    if (object.arguments !== undefined && object.arguments !== null) {
      for (const e of object.arguments) {
        message.arguments.push(e);
      }
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = "";
    }
    return message;
  },
};

const baseReadStateResponse: object = {};

export const ReadStateResponse = {
  encode(
    message: ReadStateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.blockIdentifier !== undefined) {
      BlockIdentifier.encode(
        message.blockIdentifier,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadStateResponse } as ReadStateResponse;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.blockIdentifier = BlockIdentifier.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStateResponse {
    const message = { ...baseReadStateResponse } as ReadStateResponse;
    message.data = new Uint8Array();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromJSON(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },

  toJSON(message: ReadStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    message.blockIdentifier !== undefined &&
      (obj.blockIdentifier = message.blockIdentifier
        ? BlockIdentifier.toJSON(message.blockIdentifier)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ReadStateResponse>): ReadStateResponse {
    const message = { ...baseReadStateResponse } as ReadStateResponse;
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = new Uint8Array();
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromPartial(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },
};

const baseGetEpochMetaRequest: object = { epochNumber: 0 };

export const GetEpochMetaRequest = {
  encode(
    message: GetEpochMetaRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochNumber !== 0) {
      writer.uint32(8).uint64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEpochMetaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetEpochMetaRequest } as GetEpochMetaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNumber = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEpochMetaRequest {
    const message = { ...baseGetEpochMetaRequest } as GetEpochMetaRequest;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = Number(object.epochNumber);
    } else {
      message.epochNumber = 0;
    }
    return message;
  },

  toJSON(message: GetEpochMetaRequest): unknown {
    const obj: any = {};
    message.epochNumber !== undefined &&
      (obj.epochNumber = message.epochNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<GetEpochMetaRequest>): GetEpochMetaRequest {
    const message = { ...baseGetEpochMetaRequest } as GetEpochMetaRequest;
    if (object.epochNumber !== undefined && object.epochNumber !== null) {
      message.epochNumber = object.epochNumber;
    } else {
      message.epochNumber = 0;
    }
    return message;
  },
};

const baseGetEpochMetaResponse: object = { totalBlocks: 0 };

export const GetEpochMetaResponse = {
  encode(
    message: GetEpochMetaResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochData !== undefined) {
      EpochData.encode(message.epochData, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalBlocks !== 0) {
      writer.uint32(16).uint64(message.totalBlocks);
    }
    for (const v of message.blockProducersInfo) {
      BlockProducerInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEpochMetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetEpochMetaResponse } as GetEpochMetaResponse;
    message.blockProducersInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochData = EpochData.decode(reader, reader.uint32());
          break;
        case 2:
          message.totalBlocks = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.blockProducersInfo.push(
            BlockProducerInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEpochMetaResponse {
    const message = { ...baseGetEpochMetaResponse } as GetEpochMetaResponse;
    message.blockProducersInfo = [];
    if (object.epochData !== undefined && object.epochData !== null) {
      message.epochData = EpochData.fromJSON(object.epochData);
    } else {
      message.epochData = undefined;
    }
    if (object.totalBlocks !== undefined && object.totalBlocks !== null) {
      message.totalBlocks = Number(object.totalBlocks);
    } else {
      message.totalBlocks = 0;
    }
    if (
      object.blockProducersInfo !== undefined &&
      object.blockProducersInfo !== null
    ) {
      for (const e of object.blockProducersInfo) {
        message.blockProducersInfo.push(BlockProducerInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetEpochMetaResponse): unknown {
    const obj: any = {};
    message.epochData !== undefined &&
      (obj.epochData = message.epochData
        ? EpochData.toJSON(message.epochData)
        : undefined);
    message.totalBlocks !== undefined &&
      (obj.totalBlocks = message.totalBlocks);
    if (message.blockProducersInfo) {
      obj.blockProducersInfo = message.blockProducersInfo.map((e) =>
        e ? BlockProducerInfo.toJSON(e) : undefined
      );
    } else {
      obj.blockProducersInfo = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetEpochMetaResponse>): GetEpochMetaResponse {
    const message = { ...baseGetEpochMetaResponse } as GetEpochMetaResponse;
    message.blockProducersInfo = [];
    if (object.epochData !== undefined && object.epochData !== null) {
      message.epochData = EpochData.fromPartial(object.epochData);
    } else {
      message.epochData = undefined;
    }
    if (object.totalBlocks !== undefined && object.totalBlocks !== null) {
      message.totalBlocks = object.totalBlocks;
    } else {
      message.totalBlocks = 0;
    }
    if (
      object.blockProducersInfo !== undefined &&
      object.blockProducersInfo !== null
    ) {
      for (const e of object.blockProducersInfo) {
        message.blockProducersInfo.push(BlockProducerInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetRawBlocksRequest: object = {
  startHeight: 0,
  count: 0,
  withReceipts: false,
  withTransactionLogs: false,
};

export const GetRawBlocksRequest = {
  encode(
    message: GetRawBlocksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startHeight !== 0) {
      writer.uint32(8).uint64(message.startHeight);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint64(message.count);
    }
    if (message.withReceipts === true) {
      writer.uint32(24).bool(message.withReceipts);
    }
    if (message.withTransactionLogs === true) {
      writer.uint32(32).bool(message.withTransactionLogs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRawBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRawBlocksRequest } as GetRawBlocksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startHeight = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.withReceipts = reader.bool();
          break;
        case 4:
          message.withTransactionLogs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRawBlocksRequest {
    const message = { ...baseGetRawBlocksRequest } as GetRawBlocksRequest;
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = Number(object.startHeight);
    } else {
      message.startHeight = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    if (object.withReceipts !== undefined && object.withReceipts !== null) {
      message.withReceipts = Boolean(object.withReceipts);
    } else {
      message.withReceipts = false;
    }
    if (
      object.withTransactionLogs !== undefined &&
      object.withTransactionLogs !== null
    ) {
      message.withTransactionLogs = Boolean(object.withTransactionLogs);
    } else {
      message.withTransactionLogs = false;
    }
    return message;
  },

  toJSON(message: GetRawBlocksRequest): unknown {
    const obj: any = {};
    message.startHeight !== undefined &&
      (obj.startHeight = message.startHeight);
    message.count !== undefined && (obj.count = message.count);
    message.withReceipts !== undefined &&
      (obj.withReceipts = message.withReceipts);
    message.withTransactionLogs !== undefined &&
      (obj.withTransactionLogs = message.withTransactionLogs);
    return obj;
  },

  fromPartial(object: DeepPartial<GetRawBlocksRequest>): GetRawBlocksRequest {
    const message = { ...baseGetRawBlocksRequest } as GetRawBlocksRequest;
    if (object.startHeight !== undefined && object.startHeight !== null) {
      message.startHeight = object.startHeight;
    } else {
      message.startHeight = 0;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    if (object.withReceipts !== undefined && object.withReceipts !== null) {
      message.withReceipts = object.withReceipts;
    } else {
      message.withReceipts = false;
    }
    if (
      object.withTransactionLogs !== undefined &&
      object.withTransactionLogs !== null
    ) {
      message.withTransactionLogs = object.withTransactionLogs;
    } else {
      message.withTransactionLogs = false;
    }
    return message;
  },
};

const baseGetRawBlocksResponse: object = {};

export const GetRawBlocksResponse = {
  encode(
    message: GetRawBlocksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blocks) {
      BlockInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRawBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRawBlocksResponse } as GetRawBlocksResponse;
    message.blocks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocks.push(BlockInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRawBlocksResponse {
    const message = { ...baseGetRawBlocksResponse } as GetRawBlocksResponse;
    message.blocks = [];
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(BlockInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetRawBlocksResponse): unknown {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? BlockInfo.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetRawBlocksResponse>): GetRawBlocksResponse {
    const message = { ...baseGetRawBlocksResponse } as GetRawBlocksResponse;
    message.blocks = [];
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(BlockInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetLogsByBlock: object = {};

export const GetLogsByBlock = {
  encode(
    message: GetLogsByBlock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHash.length !== 0) {
      writer.uint32(10).bytes(message.blockHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogsByBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLogsByBlock } as GetLogsByBlock;
    message.blockHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLogsByBlock {
    const message = { ...baseGetLogsByBlock } as GetLogsByBlock;
    message.blockHash = new Uint8Array();
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = bytesFromBase64(object.blockHash);
    }
    return message;
  },

  toJSON(message: GetLogsByBlock): unknown {
    const obj: any = {};
    message.blockHash !== undefined &&
      (obj.blockHash = base64FromBytes(
        message.blockHash !== undefined ? message.blockHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<GetLogsByBlock>): GetLogsByBlock {
    const message = { ...baseGetLogsByBlock } as GetLogsByBlock;
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = object.blockHash;
    } else {
      message.blockHash = new Uint8Array();
    }
    return message;
  },
};

const baseGetLogsByRange: object = {
  fromBlock: 0,
  toBlock: 0,
  paginationSize: 0,
};

export const GetLogsByRange = {
  encode(
    message: GetLogsByRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromBlock !== 0) {
      writer.uint32(8).uint64(message.fromBlock);
    }
    if (message.toBlock !== 0) {
      writer.uint32(16).uint64(message.toBlock);
    }
    if (message.paginationSize !== 0) {
      writer.uint32(24).uint64(message.paginationSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogsByRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLogsByRange } as GetLogsByRange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromBlock = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.toBlock = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.paginationSize = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLogsByRange {
    const message = { ...baseGetLogsByRange } as GetLogsByRange;
    if (object.fromBlock !== undefined && object.fromBlock !== null) {
      message.fromBlock = Number(object.fromBlock);
    } else {
      message.fromBlock = 0;
    }
    if (object.toBlock !== undefined && object.toBlock !== null) {
      message.toBlock = Number(object.toBlock);
    } else {
      message.toBlock = 0;
    }
    if (object.paginationSize !== undefined && object.paginationSize !== null) {
      message.paginationSize = Number(object.paginationSize);
    } else {
      message.paginationSize = 0;
    }
    return message;
  },

  toJSON(message: GetLogsByRange): unknown {
    const obj: any = {};
    message.fromBlock !== undefined && (obj.fromBlock = message.fromBlock);
    message.toBlock !== undefined && (obj.toBlock = message.toBlock);
    message.paginationSize !== undefined &&
      (obj.paginationSize = message.paginationSize);
    return obj;
  },

  fromPartial(object: DeepPartial<GetLogsByRange>): GetLogsByRange {
    const message = { ...baseGetLogsByRange } as GetLogsByRange;
    if (object.fromBlock !== undefined && object.fromBlock !== null) {
      message.fromBlock = object.fromBlock;
    } else {
      message.fromBlock = 0;
    }
    if (object.toBlock !== undefined && object.toBlock !== null) {
      message.toBlock = object.toBlock;
    } else {
      message.toBlock = 0;
    }
    if (object.paginationSize !== undefined && object.paginationSize !== null) {
      message.paginationSize = object.paginationSize;
    } else {
      message.paginationSize = 0;
    }
    return message;
  },
};

const baseTopics: object = {};

export const Topics = {
  encode(
    message: Topics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.topic) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Topics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTopics } as Topics;
    message.topic = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Topics {
    const message = { ...baseTopics } as Topics;
    message.topic = [];
    if (object.topic !== undefined && object.topic !== null) {
      for (const e of object.topic) {
        message.topic.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: Topics): unknown {
    const obj: any = {};
    if (message.topic) {
      obj.topic = message.topic.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.topic = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Topics>): Topics {
    const message = { ...baseTopics } as Topics;
    message.topic = [];
    if (object.topic !== undefined && object.topic !== null) {
      for (const e of object.topic) {
        message.topic.push(e);
      }
    }
    return message;
  },
};

const baseLogsFilter: object = { address: "" };

export const LogsFilter = {
  encode(
    message: LogsFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.address) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.topics) {
      Topics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogsFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLogsFilter } as LogsFilter;
    message.address = [];
    message.topics = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address.push(reader.string());
          break;
        case 2:
          message.topics.push(Topics.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogsFilter {
    const message = { ...baseLogsFilter } as LogsFilter;
    message.address = [];
    message.topics = [];
    if (object.address !== undefined && object.address !== null) {
      for (const e of object.address) {
        message.address.push(String(e));
      }
    }
    if (object.topics !== undefined && object.topics !== null) {
      for (const e of object.topics) {
        message.topics.push(Topics.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: LogsFilter): unknown {
    const obj: any = {};
    if (message.address) {
      obj.address = message.address.map((e) => e);
    } else {
      obj.address = [];
    }
    if (message.topics) {
      obj.topics = message.topics.map((e) =>
        e ? Topics.toJSON(e) : undefined
      );
    } else {
      obj.topics = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<LogsFilter>): LogsFilter {
    const message = { ...baseLogsFilter } as LogsFilter;
    message.address = [];
    message.topics = [];
    if (object.address !== undefined && object.address !== null) {
      for (const e of object.address) {
        message.address.push(e);
      }
    }
    if (object.topics !== undefined && object.topics !== null) {
      for (const e of object.topics) {
        message.topics.push(Topics.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetLogsRequest: object = {};

export const GetLogsRequest = {
  encode(
    message: GetLogsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filter !== undefined) {
      LogsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.byBlock !== undefined) {
      GetLogsByBlock.encode(message.byBlock, writer.uint32(18).fork()).ldelim();
    }
    if (message.byRange !== undefined) {
      GetLogsByRange.encode(message.byRange, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLogsRequest } as GetLogsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = LogsFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.byBlock = GetLogsByBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.byRange = GetLogsByRange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLogsRequest {
    const message = { ...baseGetLogsRequest } as GetLogsRequest;
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = LogsFilter.fromJSON(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.byBlock !== undefined && object.byBlock !== null) {
      message.byBlock = GetLogsByBlock.fromJSON(object.byBlock);
    } else {
      message.byBlock = undefined;
    }
    if (object.byRange !== undefined && object.byRange !== null) {
      message.byRange = GetLogsByRange.fromJSON(object.byRange);
    } else {
      message.byRange = undefined;
    }
    return message;
  },

  toJSON(message: GetLogsRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? LogsFilter.toJSON(message.filter)
        : undefined);
    message.byBlock !== undefined &&
      (obj.byBlock = message.byBlock
        ? GetLogsByBlock.toJSON(message.byBlock)
        : undefined);
    message.byRange !== undefined &&
      (obj.byRange = message.byRange
        ? GetLogsByRange.toJSON(message.byRange)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetLogsRequest>): GetLogsRequest {
    const message = { ...baseGetLogsRequest } as GetLogsRequest;
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = LogsFilter.fromPartial(object.filter);
    } else {
      message.filter = undefined;
    }
    if (object.byBlock !== undefined && object.byBlock !== null) {
      message.byBlock = GetLogsByBlock.fromPartial(object.byBlock);
    } else {
      message.byBlock = undefined;
    }
    if (object.byRange !== undefined && object.byRange !== null) {
      message.byRange = GetLogsByRange.fromPartial(object.byRange);
    } else {
      message.byRange = undefined;
    }
    return message;
  },
};

const baseGetLogsResponse: object = {};

export const GetLogsResponse = {
  encode(
    message: GetLogsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetLogsResponse } as GetLogsResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLogsResponse {
    const message = { ...baseGetLogsResponse } as GetLogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetLogsResponse): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetLogsResponse>): GetLogsResponse {
    const message = { ...baseGetLogsResponse } as GetLogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetTransactionLogByActionHashRequest: object = { actionHash: "" };

export const GetTransactionLogByActionHashRequest = {
  encode(
    message: GetTransactionLogByActionHashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionHash !== "") {
      writer.uint32(10).string(message.actionHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTransactionLogByActionHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetTransactionLogByActionHashRequest,
    } as GetTransactionLogByActionHashRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransactionLogByActionHashRequest {
    const message = {
      ...baseGetTransactionLogByActionHashRequest,
    } as GetTransactionLogByActionHashRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = String(object.actionHash);
    } else {
      message.actionHash = "";
    }
    return message;
  },

  toJSON(message: GetTransactionLogByActionHashRequest): unknown {
    const obj: any = {};
    message.actionHash !== undefined && (obj.actionHash = message.actionHash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetTransactionLogByActionHashRequest>
  ): GetTransactionLogByActionHashRequest {
    const message = {
      ...baseGetTransactionLogByActionHashRequest,
    } as GetTransactionLogByActionHashRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = object.actionHash;
    } else {
      message.actionHash = "";
    }
    return message;
  },
};

const baseGetTransactionLogByActionHashResponse: object = {};

export const GetTransactionLogByActionHashResponse = {
  encode(
    message: GetTransactionLogByActionHashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transactionLog !== undefined) {
      TransactionLog.encode(
        message.transactionLog,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTransactionLogByActionHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetTransactionLogByActionHashResponse,
    } as GetTransactionLogByActionHashResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionLog = TransactionLog.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransactionLogByActionHashResponse {
    const message = {
      ...baseGetTransactionLogByActionHashResponse,
    } as GetTransactionLogByActionHashResponse;
    if (object.transactionLog !== undefined && object.transactionLog !== null) {
      message.transactionLog = TransactionLog.fromJSON(object.transactionLog);
    } else {
      message.transactionLog = undefined;
    }
    return message;
  },

  toJSON(message: GetTransactionLogByActionHashResponse): unknown {
    const obj: any = {};
    message.transactionLog !== undefined &&
      (obj.transactionLog = message.transactionLog
        ? TransactionLog.toJSON(message.transactionLog)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetTransactionLogByActionHashResponse>
  ): GetTransactionLogByActionHashResponse {
    const message = {
      ...baseGetTransactionLogByActionHashResponse,
    } as GetTransactionLogByActionHashResponse;
    if (object.transactionLog !== undefined && object.transactionLog !== null) {
      message.transactionLog = TransactionLog.fromPartial(
        object.transactionLog
      );
    } else {
      message.transactionLog = undefined;
    }
    return message;
  },
};

const baseGetTransactionLogByBlockHeightRequest: object = { blockHeight: 0 };

export const GetTransactionLogByBlockHeightRequest = {
  encode(
    message: GetTransactionLogByBlockHeightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTransactionLogByBlockHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetTransactionLogByBlockHeightRequest,
    } as GetTransactionLogByBlockHeightRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransactionLogByBlockHeightRequest {
    const message = {
      ...baseGetTransactionLogByBlockHeightRequest,
    } as GetTransactionLogByBlockHeightRequest;
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    return message;
  },

  toJSON(message: GetTransactionLogByBlockHeightRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetTransactionLogByBlockHeightRequest>
  ): GetTransactionLogByBlockHeightRequest {
    const message = {
      ...baseGetTransactionLogByBlockHeightRequest,
    } as GetTransactionLogByBlockHeightRequest;
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    return message;
  },
};

const baseGetTransactionLogByBlockHeightResponse: object = {};

export const GetTransactionLogByBlockHeightResponse = {
  encode(
    message: GetTransactionLogByBlockHeightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transactionLogs !== undefined) {
      TransactionLogs.encode(
        message.transactionLogs,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.blockIdentifier !== undefined) {
      BlockIdentifier.encode(
        message.blockIdentifier,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetTransactionLogByBlockHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetTransactionLogByBlockHeightResponse,
    } as GetTransactionLogByBlockHeightResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionLogs = TransactionLogs.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.blockIdentifier = BlockIdentifier.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransactionLogByBlockHeightResponse {
    const message = {
      ...baseGetTransactionLogByBlockHeightResponse,
    } as GetTransactionLogByBlockHeightResponse;
    if (
      object.transactionLogs !== undefined &&
      object.transactionLogs !== null
    ) {
      message.transactionLogs = TransactionLogs.fromJSON(
        object.transactionLogs
      );
    } else {
      message.transactionLogs = undefined;
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromJSON(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },

  toJSON(message: GetTransactionLogByBlockHeightResponse): unknown {
    const obj: any = {};
    message.transactionLogs !== undefined &&
      (obj.transactionLogs = message.transactionLogs
        ? TransactionLogs.toJSON(message.transactionLogs)
        : undefined);
    message.blockIdentifier !== undefined &&
      (obj.blockIdentifier = message.blockIdentifier
        ? BlockIdentifier.toJSON(message.blockIdentifier)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetTransactionLogByBlockHeightResponse>
  ): GetTransactionLogByBlockHeightResponse {
    const message = {
      ...baseGetTransactionLogByBlockHeightResponse,
    } as GetTransactionLogByBlockHeightResponse;
    if (
      object.transactionLogs !== undefined &&
      object.transactionLogs !== null
    ) {
      message.transactionLogs = TransactionLogs.fromPartial(
        object.transactionLogs
      );
    } else {
      message.transactionLogs = undefined;
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromPartial(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },
};

const baseStreamBlocksRequest: object = {};

export const StreamBlocksRequest = {
  encode(
    _: StreamBlocksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamBlocksRequest } as StreamBlocksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StreamBlocksRequest {
    const message = { ...baseStreamBlocksRequest } as StreamBlocksRequest;
    return message;
  },

  toJSON(_: StreamBlocksRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StreamBlocksRequest>): StreamBlocksRequest {
    const message = { ...baseStreamBlocksRequest } as StreamBlocksRequest;
    return message;
  },
};

const baseStreamBlocksResponse: object = {};

export const StreamBlocksResponse = {
  encode(
    message: StreamBlocksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.block !== undefined) {
      BlockInfo.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockIdentifier !== undefined) {
      BlockIdentifier.encode(
        message.blockIdentifier,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StreamBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamBlocksResponse } as StreamBlocksResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockIdentifier = BlockIdentifier.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamBlocksResponse {
    const message = { ...baseStreamBlocksResponse } as StreamBlocksResponse;
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockInfo.fromJSON(object.block);
    } else {
      message.block = undefined;
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromJSON(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },

  toJSON(message: StreamBlocksResponse): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block ? BlockInfo.toJSON(message.block) : undefined);
    message.blockIdentifier !== undefined &&
      (obj.blockIdentifier = message.blockIdentifier
        ? BlockIdentifier.toJSON(message.blockIdentifier)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamBlocksResponse>): StreamBlocksResponse {
    const message = { ...baseStreamBlocksResponse } as StreamBlocksResponse;
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockInfo.fromPartial(object.block);
    } else {
      message.block = undefined;
    }
    if (
      object.blockIdentifier !== undefined &&
      object.blockIdentifier !== null
    ) {
      message.blockIdentifier = BlockIdentifier.fromPartial(
        object.blockIdentifier
      );
    } else {
      message.blockIdentifier = undefined;
    }
    return message;
  },
};

const baseStreamLogsRequest: object = {};

export const StreamLogsRequest = {
  encode(
    message: StreamLogsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filter !== undefined) {
      LogsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamLogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamLogsRequest } as StreamLogsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = LogsFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamLogsRequest {
    const message = { ...baseStreamLogsRequest } as StreamLogsRequest;
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = LogsFilter.fromJSON(object.filter);
    } else {
      message.filter = undefined;
    }
    return message;
  },

  toJSON(message: StreamLogsRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? LogsFilter.toJSON(message.filter)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamLogsRequest>): StreamLogsRequest {
    const message = { ...baseStreamLogsRequest } as StreamLogsRequest;
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = LogsFilter.fromPartial(object.filter);
    } else {
      message.filter = undefined;
    }
    return message;
  },
};

const baseStreamLogsResponse: object = {};

export const StreamLogsResponse = {
  encode(
    message: StreamLogsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.log !== undefined) {
      Log.encode(message.log, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamLogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStreamLogsResponse } as StreamLogsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = Log.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamLogsResponse {
    const message = { ...baseStreamLogsResponse } as StreamLogsResponse;
    if (object.log !== undefined && object.log !== null) {
      message.log = Log.fromJSON(object.log);
    } else {
      message.log = undefined;
    }
    return message;
  },

  toJSON(message: StreamLogsResponse): unknown {
    const obj: any = {};
    message.log !== undefined &&
      (obj.log = message.log ? Log.toJSON(message.log) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StreamLogsResponse>): StreamLogsResponse {
    const message = { ...baseStreamLogsResponse } as StreamLogsResponse;
    if (object.log !== undefined && object.log !== null) {
      message.log = Log.fromPartial(object.log);
    } else {
      message.log = undefined;
    }
    return message;
  },
};

const baseGetActPoolActionsRequest: object = { actionHashes: "" };

export const GetActPoolActionsRequest = {
  encode(
    message: GetActPoolActionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.actionHashes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActPoolActionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetActPoolActionsRequest,
    } as GetActPoolActionsRequest;
    message.actionHashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetActPoolActionsRequest {
    const message = {
      ...baseGetActPoolActionsRequest,
    } as GetActPoolActionsRequest;
    message.actionHashes = [];
    if (object.actionHashes !== undefined && object.actionHashes !== null) {
      for (const e of object.actionHashes) {
        message.actionHashes.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: GetActPoolActionsRequest): unknown {
    const obj: any = {};
    if (message.actionHashes) {
      obj.actionHashes = message.actionHashes.map((e) => e);
    } else {
      obj.actionHashes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetActPoolActionsRequest>
  ): GetActPoolActionsRequest {
    const message = {
      ...baseGetActPoolActionsRequest,
    } as GetActPoolActionsRequest;
    message.actionHashes = [];
    if (object.actionHashes !== undefined && object.actionHashes !== null) {
      for (const e of object.actionHashes) {
        message.actionHashes.push(e);
      }
    }
    return message;
  },
};

const baseGetActPoolActionsResponse: object = {};

export const GetActPoolActionsResponse = {
  encode(
    message: GetActPoolActionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetActPoolActionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetActPoolActionsResponse,
    } as GetActPoolActionsResponse;
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

  fromJSON(object: any): GetActPoolActionsResponse {
    const message = {
      ...baseGetActPoolActionsResponse,
    } as GetActPoolActionsResponse;
    message.actions = [];
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetActPoolActionsResponse): unknown {
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

  fromPartial(
    object: DeepPartial<GetActPoolActionsResponse>
  ): GetActPoolActionsResponse {
    const message = {
      ...baseGetActPoolActionsResponse,
    } as GetActPoolActionsResponse;
    message.actions = [];
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(Action.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetElectionBucketsRequest: object = { epochNum: 0 };

export const GetElectionBucketsRequest = {
  encode(
    message: GetElectionBucketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epochNum !== 0) {
      writer.uint32(8).uint64(message.epochNum);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetElectionBucketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetElectionBucketsRequest,
    } as GetElectionBucketsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochNum = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionBucketsRequest {
    const message = {
      ...baseGetElectionBucketsRequest,
    } as GetElectionBucketsRequest;
    if (object.epochNum !== undefined && object.epochNum !== null) {
      message.epochNum = Number(object.epochNum);
    } else {
      message.epochNum = 0;
    }
    return message;
  },

  toJSON(message: GetElectionBucketsRequest): unknown {
    const obj: any = {};
    message.epochNum !== undefined && (obj.epochNum = message.epochNum);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetElectionBucketsRequest>
  ): GetElectionBucketsRequest {
    const message = {
      ...baseGetElectionBucketsRequest,
    } as GetElectionBucketsRequest;
    if (object.epochNum !== undefined && object.epochNum !== null) {
      message.epochNum = object.epochNum;
    } else {
      message.epochNum = 0;
    }
    return message;
  },
};

const baseGetElectionBucketsResponse: object = {};

export const GetElectionBucketsResponse = {
  encode(
    message: GetElectionBucketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.buckets) {
      ElectionBucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetElectionBucketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetElectionBucketsResponse,
    } as GetElectionBucketsResponse;
    message.buckets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buckets.push(ElectionBucket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionBucketsResponse {
    const message = {
      ...baseGetElectionBucketsResponse,
    } as GetElectionBucketsResponse;
    message.buckets = [];
    if (object.buckets !== undefined && object.buckets !== null) {
      for (const e of object.buckets) {
        message.buckets.push(ElectionBucket.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GetElectionBucketsResponse): unknown {
    const obj: any = {};
    if (message.buckets) {
      obj.buckets = message.buckets.map((e) =>
        e ? ElectionBucket.toJSON(e) : undefined
      );
    } else {
      obj.buckets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetElectionBucketsResponse>
  ): GetElectionBucketsResponse {
    const message = {
      ...baseGetElectionBucketsResponse,
    } as GetElectionBucketsResponse;
    message.buckets = [];
    if (object.buckets !== undefined && object.buckets !== null) {
      for (const e of object.buckets) {
        message.buckets.push(ElectionBucket.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGetEvmTransfersByActionHashRequest: object = { actionHash: "" };

export const GetEvmTransfersByActionHashRequest = {
  encode(
    message: GetEvmTransfersByActionHashRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionHash !== "") {
      writer.uint32(10).string(message.actionHash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEvmTransfersByActionHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEvmTransfersByActionHashRequest,
    } as GetEvmTransfersByActionHashRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEvmTransfersByActionHashRequest {
    const message = {
      ...baseGetEvmTransfersByActionHashRequest,
    } as GetEvmTransfersByActionHashRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = String(object.actionHash);
    } else {
      message.actionHash = "";
    }
    return message;
  },

  toJSON(message: GetEvmTransfersByActionHashRequest): unknown {
    const obj: any = {};
    message.actionHash !== undefined && (obj.actionHash = message.actionHash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEvmTransfersByActionHashRequest>
  ): GetEvmTransfersByActionHashRequest {
    const message = {
      ...baseGetEvmTransfersByActionHashRequest,
    } as GetEvmTransfersByActionHashRequest;
    if (object.actionHash !== undefined && object.actionHash !== null) {
      message.actionHash = object.actionHash;
    } else {
      message.actionHash = "";
    }
    return message;
  },
};

const baseGetEvmTransfersByActionHashResponse: object = {};

export const GetEvmTransfersByActionHashResponse = {
  encode(
    message: GetEvmTransfersByActionHashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionEvmTransfers !== undefined) {
      ActionEvmTransfer.encode(
        message.actionEvmTransfers,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEvmTransfersByActionHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEvmTransfersByActionHashResponse,
    } as GetEvmTransfersByActionHashResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionEvmTransfers = ActionEvmTransfer.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEvmTransfersByActionHashResponse {
    const message = {
      ...baseGetEvmTransfersByActionHashResponse,
    } as GetEvmTransfersByActionHashResponse;
    if (
      object.actionEvmTransfers !== undefined &&
      object.actionEvmTransfers !== null
    ) {
      message.actionEvmTransfers = ActionEvmTransfer.fromJSON(
        object.actionEvmTransfers
      );
    } else {
      message.actionEvmTransfers = undefined;
    }
    return message;
  },

  toJSON(message: GetEvmTransfersByActionHashResponse): unknown {
    const obj: any = {};
    message.actionEvmTransfers !== undefined &&
      (obj.actionEvmTransfers = message.actionEvmTransfers
        ? ActionEvmTransfer.toJSON(message.actionEvmTransfers)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEvmTransfersByActionHashResponse>
  ): GetEvmTransfersByActionHashResponse {
    const message = {
      ...baseGetEvmTransfersByActionHashResponse,
    } as GetEvmTransfersByActionHashResponse;
    if (
      object.actionEvmTransfers !== undefined &&
      object.actionEvmTransfers !== null
    ) {
      message.actionEvmTransfers = ActionEvmTransfer.fromPartial(
        object.actionEvmTransfers
      );
    } else {
      message.actionEvmTransfers = undefined;
    }
    return message;
  },
};

const baseGetEvmTransfersByBlockHeightRequest: object = { blockHeight: 0 };

export const GetEvmTransfersByBlockHeightRequest = {
  encode(
    message: GetEvmTransfersByBlockHeightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== 0) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEvmTransfersByBlockHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEvmTransfersByBlockHeightRequest,
    } as GetEvmTransfersByBlockHeightRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEvmTransfersByBlockHeightRequest {
    const message = {
      ...baseGetEvmTransfersByBlockHeightRequest,
    } as GetEvmTransfersByBlockHeightRequest;
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    return message;
  },

  toJSON(message: GetEvmTransfersByBlockHeightRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEvmTransfersByBlockHeightRequest>
  ): GetEvmTransfersByBlockHeightRequest {
    const message = {
      ...baseGetEvmTransfersByBlockHeightRequest,
    } as GetEvmTransfersByBlockHeightRequest;
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    return message;
  },
};

const baseGetEvmTransfersByBlockHeightResponse: object = {};

export const GetEvmTransfersByBlockHeightResponse = {
  encode(
    message: GetEvmTransfersByBlockHeightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockEvmTransfers !== undefined) {
      BlockEvmTransfer.encode(
        message.blockEvmTransfers,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetEvmTransfersByBlockHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetEvmTransfersByBlockHeightResponse,
    } as GetEvmTransfersByBlockHeightResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockEvmTransfers = BlockEvmTransfer.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEvmTransfersByBlockHeightResponse {
    const message = {
      ...baseGetEvmTransfersByBlockHeightResponse,
    } as GetEvmTransfersByBlockHeightResponse;
    if (
      object.blockEvmTransfers !== undefined &&
      object.blockEvmTransfers !== null
    ) {
      message.blockEvmTransfers = BlockEvmTransfer.fromJSON(
        object.blockEvmTransfers
      );
    } else {
      message.blockEvmTransfers = undefined;
    }
    return message;
  },

  toJSON(message: GetEvmTransfersByBlockHeightResponse): unknown {
    const obj: any = {};
    message.blockEvmTransfers !== undefined &&
      (obj.blockEvmTransfers = message.blockEvmTransfers
        ? BlockEvmTransfer.toJSON(message.blockEvmTransfers)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetEvmTransfersByBlockHeightResponse>
  ): GetEvmTransfersByBlockHeightResponse {
    const message = {
      ...baseGetEvmTransfersByBlockHeightResponse,
    } as GetEvmTransfersByBlockHeightResponse;
    if (
      object.blockEvmTransfers !== undefined &&
      object.blockEvmTransfers !== null
    ) {
      message.blockEvmTransfers = BlockEvmTransfer.fromPartial(
        object.blockEvmTransfers
      );
    } else {
      message.blockEvmTransfers = undefined;
    }
    return message;
  },
};

export interface APIService {
  /** get the address detail of an address */
  GetAccount(request: GetAccountRequest): Promise<GetAccountResponse>;
  /**
   * get action(s) by:
   * 1. start index and action count
   * 2. action hash
   * 3. address with start index and action count
   * 4. get unconfirmed actions by address with start index and action count
   * 5. block hash with start index and action count
   */
  GetActions(request: GetActionsRequest): Promise<GetActionsResponse>;
  /**
   * get block metadata(s) by:
   * 1. start index and block count
   * 2. block hash
   */
  GetBlockMetas(request: GetBlockMetasRequest): Promise<GetBlockMetasResponse>;
  /** get chain metadata */
  GetChainMeta(request: GetChainMetaRequest): Promise<GetChainMetaResponse>;
  /** get server version */
  GetServerMeta(request: GetServerMetaRequest): Promise<GetServerMetaResponse>;
  /** sendAction */
  SendAction(request: SendActionRequest): Promise<SendActionResponse>;
  /** get receipt by action Hash */
  GetReceiptByAction(
    request: GetReceiptByActionRequest
  ): Promise<GetReceiptByActionResponse>;
  /** TODO: read contract */
  ReadContract(request: ReadContractRequest): Promise<ReadContractResponse>;
  /** suggest gas price */
  SuggestGasPrice(
    request: SuggestGasPriceRequest
  ): Promise<SuggestGasPriceResponse>;
  /** estimate gas for action, to be deprecated */
  EstimateGasForAction(
    request: EstimateGasForActionRequest
  ): Promise<EstimateGasForActionResponse>;
  /** estimate gas for action and transfer not sealed */
  EstimateActionGasConsumption(
    request: EstimateActionGasConsumptionRequest
  ): Promise<EstimateActionGasConsumptionResponse>;
  /** read state from blockchain */
  ReadState(request: ReadStateRequest): Promise<ReadStateResponse>;
  /** get epoch metadata */
  GetEpochMeta(request: GetEpochMetaRequest): Promise<GetEpochMetaResponse>;
  /** get raw blocks data */
  GetRawBlocks(request: GetRawBlocksRequest): Promise<GetRawBlocksResponse>;
  /** get logs filtered by contract address and topics */
  GetLogs(request: GetLogsRequest): Promise<GetLogsResponse>;
  GetTransactionLogByActionHash(
    request: GetTransactionLogByActionHashRequest
  ): Promise<GetTransactionLogByActionHashResponse>;
  GetTransactionLogByBlockHeight(
    request: GetTransactionLogByBlockHeightRequest
  ): Promise<GetTransactionLogByBlockHeightResponse>;
  /** get block info in stream */
  StreamBlocks(request: StreamBlocksRequest): Observable<StreamBlocksResponse>;
  /** get logs filtered by contract address and topics in stream */
  StreamLogs(request: StreamLogsRequest): Observable<StreamLogsResponse>;
  /** get actions from act pool */
  GetActPoolActions(
    request: GetActPoolActionsRequest
  ): Promise<GetActPoolActionsResponse>;
  /** Deprecated */
  GetEvmTransfersByActionHash(
    request: GetEvmTransfersByActionHashRequest
  ): Promise<GetEvmTransfersByActionHashResponse>;
  /** Deprecated */
  GetEvmTransfersByBlockHeight(
    request: GetEvmTransfersByBlockHeightRequest
  ): Promise<GetEvmTransfersByBlockHeightResponse>;
  /** election APIs, Deprecated */
  GetElectionBuckets(
    request: GetElectionBucketsRequest
  ): Promise<GetElectionBucketsResponse>;
}

export class APIServiceClientImpl implements APIService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAccount = this.GetAccount.bind(this);
    this.GetActions = this.GetActions.bind(this);
    this.GetBlockMetas = this.GetBlockMetas.bind(this);
    this.GetChainMeta = this.GetChainMeta.bind(this);
    this.GetServerMeta = this.GetServerMeta.bind(this);
    this.SendAction = this.SendAction.bind(this);
    this.GetReceiptByAction = this.GetReceiptByAction.bind(this);
    this.ReadContract = this.ReadContract.bind(this);
    this.SuggestGasPrice = this.SuggestGasPrice.bind(this);
    this.EstimateGasForAction = this.EstimateGasForAction.bind(this);
    this.EstimateActionGasConsumption =
      this.EstimateActionGasConsumption.bind(this);
    this.ReadState = this.ReadState.bind(this);
    this.GetEpochMeta = this.GetEpochMeta.bind(this);
    this.GetRawBlocks = this.GetRawBlocks.bind(this);
    this.GetLogs = this.GetLogs.bind(this);
    this.GetTransactionLogByActionHash =
      this.GetTransactionLogByActionHash.bind(this);
    this.GetTransactionLogByBlockHeight =
      this.GetTransactionLogByBlockHeight.bind(this);
    this.StreamBlocks = this.StreamBlocks.bind(this);
    this.StreamLogs = this.StreamLogs.bind(this);
    this.GetActPoolActions = this.GetActPoolActions.bind(this);
    this.GetEvmTransfersByActionHash =
      this.GetEvmTransfersByActionHash.bind(this);
    this.GetEvmTransfersByBlockHeight =
      this.GetEvmTransfersByBlockHeight.bind(this);
    this.GetElectionBuckets = this.GetElectionBuckets.bind(this);
  }
  GetAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    const data = GetAccountRequest.encode(request).finish();
    const promise = this.rpc.request("iotexapi.APIService", "GetAccount", data);
    return promise.then((data) =>
      GetAccountResponse.decode(new _m0.Reader(data))
    );
  }

  GetActions(request: GetActionsRequest): Promise<GetActionsResponse> {
    const data = GetActionsRequest.encode(request).finish();
    const promise = this.rpc.request("iotexapi.APIService", "GetActions", data);
    return promise.then((data) =>
      GetActionsResponse.decode(new _m0.Reader(data))
    );
  }

  GetBlockMetas(request: GetBlockMetasRequest): Promise<GetBlockMetasResponse> {
    const data = GetBlockMetasRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetBlockMetas",
      data
    );
    return promise.then((data) =>
      GetBlockMetasResponse.decode(new _m0.Reader(data))
    );
  }

  GetChainMeta(request: GetChainMetaRequest): Promise<GetChainMetaResponse> {
    const data = GetChainMetaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetChainMeta",
      data
    );
    return promise.then((data) =>
      GetChainMetaResponse.decode(new _m0.Reader(data))
    );
  }

  GetServerMeta(request: GetServerMetaRequest): Promise<GetServerMetaResponse> {
    const data = GetServerMetaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetServerMeta",
      data
    );
    return promise.then((data) =>
      GetServerMetaResponse.decode(new _m0.Reader(data))
    );
  }

  SendAction(request: SendActionRequest): Promise<SendActionResponse> {
    const data = SendActionRequest.encode(request).finish();
    const promise = this.rpc.request("iotexapi.APIService", "SendAction", data);
    return promise.then((data) =>
      SendActionResponse.decode(new _m0.Reader(data))
    );
  }

  GetReceiptByAction(
    request: GetReceiptByActionRequest
  ): Promise<GetReceiptByActionResponse> {
    const data = GetReceiptByActionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetReceiptByAction",
      data
    );
    return promise.then((data) =>
      GetReceiptByActionResponse.decode(new _m0.Reader(data))
    );
  }

  ReadContract(request: ReadContractRequest): Promise<ReadContractResponse> {
    const data = ReadContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "ReadContract",
      data
    );
    return promise.then((data) =>
      ReadContractResponse.decode(new _m0.Reader(data))
    );
  }

  SuggestGasPrice(
    request: SuggestGasPriceRequest
  ): Promise<SuggestGasPriceResponse> {
    const data = SuggestGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "SuggestGasPrice",
      data
    );
    return promise.then((data) =>
      SuggestGasPriceResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateGasForAction(
    request: EstimateGasForActionRequest
  ): Promise<EstimateGasForActionResponse> {
    const data = EstimateGasForActionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "EstimateGasForAction",
      data
    );
    return promise.then((data) =>
      EstimateGasForActionResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateActionGasConsumption(
    request: EstimateActionGasConsumptionRequest
  ): Promise<EstimateActionGasConsumptionResponse> {
    const data = EstimateActionGasConsumptionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "EstimateActionGasConsumption",
      data
    );
    return promise.then((data) =>
      EstimateActionGasConsumptionResponse.decode(new _m0.Reader(data))
    );
  }

  ReadState(request: ReadStateRequest): Promise<ReadStateResponse> {
    const data = ReadStateRequest.encode(request).finish();
    const promise = this.rpc.request("iotexapi.APIService", "ReadState", data);
    return promise.then((data) =>
      ReadStateResponse.decode(new _m0.Reader(data))
    );
  }

  GetEpochMeta(request: GetEpochMetaRequest): Promise<GetEpochMetaResponse> {
    const data = GetEpochMetaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetEpochMeta",
      data
    );
    return promise.then((data) =>
      GetEpochMetaResponse.decode(new _m0.Reader(data))
    );
  }

  GetRawBlocks(request: GetRawBlocksRequest): Promise<GetRawBlocksResponse> {
    const data = GetRawBlocksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetRawBlocks",
      data
    );
    return promise.then((data) =>
      GetRawBlocksResponse.decode(new _m0.Reader(data))
    );
  }

  GetLogs(request: GetLogsRequest): Promise<GetLogsResponse> {
    const data = GetLogsRequest.encode(request).finish();
    const promise = this.rpc.request("iotexapi.APIService", "GetLogs", data);
    return promise.then((data) => GetLogsResponse.decode(new _m0.Reader(data)));
  }

  GetTransactionLogByActionHash(
    request: GetTransactionLogByActionHashRequest
  ): Promise<GetTransactionLogByActionHashResponse> {
    const data = GetTransactionLogByActionHashRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetTransactionLogByActionHash",
      data
    );
    return promise.then((data) =>
      GetTransactionLogByActionHashResponse.decode(new _m0.Reader(data))
    );
  }

  GetTransactionLogByBlockHeight(
    request: GetTransactionLogByBlockHeightRequest
  ): Promise<GetTransactionLogByBlockHeightResponse> {
    const data = GetTransactionLogByBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetTransactionLogByBlockHeight",
      data
    );
    return promise.then((data) =>
      GetTransactionLogByBlockHeightResponse.decode(new _m0.Reader(data))
    );
  }

  // @ts-ignore
  StreamBlocks(request: StreamBlocksRequest): Promise<StreamBlocksResponse> {
    const data = StreamBlocksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "StreamBlocks",
      data
    );
    return promise.then((data) =>
      StreamBlocksResponse.decode(new _m0.Reader(data))
    );
  }

  // @ts-ignore
  StreamLogs(request: StreamLogsRequest): Promise<StreamLogsResponse> {
    const data = StreamLogsRequest.encode(request).finish();
    const promise = this.rpc.request("iotexapi.APIService", "StreamLogs", data);
    return promise.then((data) =>
      StreamLogsResponse.decode(new _m0.Reader(data))
    );
  }

  GetActPoolActions(
    request: GetActPoolActionsRequest
  ): Promise<GetActPoolActionsResponse> {
    const data = GetActPoolActionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetActPoolActions",
      data
    );
    return promise.then((data) =>
      GetActPoolActionsResponse.decode(new _m0.Reader(data))
    );
  }

  GetEvmTransfersByActionHash(
    request: GetEvmTransfersByActionHashRequest
  ): Promise<GetEvmTransfersByActionHashResponse> {
    const data = GetEvmTransfersByActionHashRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetEvmTransfersByActionHash",
      data
    );
    return promise.then((data) =>
      GetEvmTransfersByActionHashResponse.decode(new _m0.Reader(data))
    );
  }

  GetEvmTransfersByBlockHeight(
    request: GetEvmTransfersByBlockHeightRequest
  ): Promise<GetEvmTransfersByBlockHeightResponse> {
    const data = GetEvmTransfersByBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetEvmTransfersByBlockHeight",
      data
    );
    return promise.then((data) =>
      GetEvmTransfersByBlockHeightResponse.decode(new _m0.Reader(data))
    );
  }

  GetElectionBuckets(
    request: GetElectionBucketsRequest
  ): Promise<GetElectionBucketsResponse> {
    const data = GetElectionBucketsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.APIService",
      "GetElectionBuckets",
      data
    );
    return promise.then((data) =>
      GetElectionBucketsResponse.decode(new _m0.Reader(data))
    );
  }
}

/** experiment */
export interface TransactionLogService {
  GetTransactionLogByActionHash(
    request: GetTransactionLogByActionHashRequest
  ): Promise<GetTransactionLogByActionHashResponse>;
  GetTransactionLogByBlockHeight(
    request: GetTransactionLogByBlockHeightRequest
  ): Promise<GetTransactionLogByBlockHeightResponse>;
}

export class TransactionLogServiceClientImpl implements TransactionLogService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetTransactionLogByActionHash =
      this.GetTransactionLogByActionHash.bind(this);
    this.GetTransactionLogByBlockHeight =
      this.GetTransactionLogByBlockHeight.bind(this);
  }
  GetTransactionLogByActionHash(
    request: GetTransactionLogByActionHashRequest
  ): Promise<GetTransactionLogByActionHashResponse> {
    const data = GetTransactionLogByActionHashRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.TransactionLogService",
      "GetTransactionLogByActionHash",
      data
    );
    return promise.then((data) =>
      GetTransactionLogByActionHashResponse.decode(new _m0.Reader(data))
    );
  }

  GetTransactionLogByBlockHeight(
    request: GetTransactionLogByBlockHeightRequest
  ): Promise<GetTransactionLogByBlockHeightResponse> {
    const data = GetTransactionLogByBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "iotexapi.TransactionLogService",
      "GetTransactionLogByBlockHeight",
      data
    );
    return promise.then((data) =>
      GetTransactionLogByBlockHeightResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
