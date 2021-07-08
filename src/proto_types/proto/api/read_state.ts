/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iotexapi";

/**
 * To compile the proto, run:
 *      protoc -I. -I ./../types --go_out=plugins=grpc:$GOPATH/src *.proto
 */

export interface PaginationParam {
  offset: number;
  limit: number;
}

export interface ReadStakingDataMethod {
  method: ReadStakingDataMethod_Name;
}

export enum ReadStakingDataMethod_Name {
  INVALID = 0,
  BUCKETS = 1,
  BUCKETS_BY_VOTER = 2,
  BUCKETS_BY_CANDIDATE = 3,
  CANDIDATES = 4,
  CANDIDATE_BY_NAME = 5,
  BUCKETS_BY_INDEXES = 6,
  CANDIDATE_BY_ADDRESS = 7,
  TOTAL_STAKING_AMOUNT = 8,
  BUCKETS_COUNT = 9,
  UNRECOGNIZED = -1,
}

export function readStakingDataMethod_NameFromJSON(
  object: any
): ReadStakingDataMethod_Name {
  switch (object) {
    case 0:
    case "INVALID":
      return ReadStakingDataMethod_Name.INVALID;
    case 1:
    case "BUCKETS":
      return ReadStakingDataMethod_Name.BUCKETS;
    case 2:
    case "BUCKETS_BY_VOTER":
      return ReadStakingDataMethod_Name.BUCKETS_BY_VOTER;
    case 3:
    case "BUCKETS_BY_CANDIDATE":
      return ReadStakingDataMethod_Name.BUCKETS_BY_CANDIDATE;
    case 4:
    case "CANDIDATES":
      return ReadStakingDataMethod_Name.CANDIDATES;
    case 5:
    case "CANDIDATE_BY_NAME":
      return ReadStakingDataMethod_Name.CANDIDATE_BY_NAME;
    case 6:
    case "BUCKETS_BY_INDEXES":
      return ReadStakingDataMethod_Name.BUCKETS_BY_INDEXES;
    case 7:
    case "CANDIDATE_BY_ADDRESS":
      return ReadStakingDataMethod_Name.CANDIDATE_BY_ADDRESS;
    case 8:
    case "TOTAL_STAKING_AMOUNT":
      return ReadStakingDataMethod_Name.TOTAL_STAKING_AMOUNT;
    case 9:
    case "BUCKETS_COUNT":
      return ReadStakingDataMethod_Name.BUCKETS_COUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReadStakingDataMethod_Name.UNRECOGNIZED;
  }
}

export function readStakingDataMethod_NameToJSON(
  object: ReadStakingDataMethod_Name
): string {
  switch (object) {
    case ReadStakingDataMethod_Name.INVALID:
      return "INVALID";
    case ReadStakingDataMethod_Name.BUCKETS:
      return "BUCKETS";
    case ReadStakingDataMethod_Name.BUCKETS_BY_VOTER:
      return "BUCKETS_BY_VOTER";
    case ReadStakingDataMethod_Name.BUCKETS_BY_CANDIDATE:
      return "BUCKETS_BY_CANDIDATE";
    case ReadStakingDataMethod_Name.CANDIDATES:
      return "CANDIDATES";
    case ReadStakingDataMethod_Name.CANDIDATE_BY_NAME:
      return "CANDIDATE_BY_NAME";
    case ReadStakingDataMethod_Name.BUCKETS_BY_INDEXES:
      return "BUCKETS_BY_INDEXES";
    case ReadStakingDataMethod_Name.CANDIDATE_BY_ADDRESS:
      return "CANDIDATE_BY_ADDRESS";
    case ReadStakingDataMethod_Name.TOTAL_STAKING_AMOUNT:
      return "TOTAL_STAKING_AMOUNT";
    case ReadStakingDataMethod_Name.BUCKETS_COUNT:
      return "BUCKETS_COUNT";
    default:
      return "UNKNOWN";
  }
}

export interface ReadStakingDataRequest {
  buckets: ReadStakingDataRequest_VoteBuckets | undefined;
  bucketsByVoter: ReadStakingDataRequest_VoteBucketsByVoter | undefined;
  bucketsByCandidate: ReadStakingDataRequest_VoteBucketsByCandidate | undefined;
  candidates: ReadStakingDataRequest_Candidates | undefined;
  candidateByName: ReadStakingDataRequest_CandidateByName | undefined;
  bucketsByIndexes: ReadStakingDataRequest_VoteBucketsByIndexes | undefined;
  candidateByAddress: ReadStakingDataRequest_CandidateByAddress | undefined;
  totalStakingAmount: ReadStakingDataRequest_TotalStakingAmount | undefined;
  bucketsCount: ReadStakingDataRequest_BucketsCount | undefined;
}

export interface ReadStakingDataRequest_VoteBuckets {
  pagination: PaginationParam | undefined;
}

export interface ReadStakingDataRequest_VoteBucketsByVoter {
  voterAddress: string;
  pagination: PaginationParam | undefined;
}

export interface ReadStakingDataRequest_VoteBucketsByCandidate {
  candName: string;
  pagination: PaginationParam | undefined;
}

export interface ReadStakingDataRequest_Candidates {
  pagination: PaginationParam | undefined;
}

export interface ReadStakingDataRequest_CandidateByName {
  candName: string;
}

export interface ReadStakingDataRequest_VoteBucketsByIndexes {
  index: number[];
}

export interface ReadStakingDataRequest_CandidateByAddress {
  ownerAddr: string;
}

export interface ReadStakingDataRequest_TotalStakingAmount {}

export interface ReadStakingDataRequest_BucketsCount {}

const basePaginationParam: object = { offset: 0, limit: 0 };

export const PaginationParam = {
  encode(
    message: PaginationParam,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint32(message.offset);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaginationParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePaginationParam } as PaginationParam;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offset = reader.uint32();
          break;
        case 2:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PaginationParam {
    const message = { ...basePaginationParam } as PaginationParam;
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = Number(object.offset);
    } else {
      message.offset = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    return message;
  },

  toJSON(message: PaginationParam): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = message.offset);
    message.limit !== undefined && (obj.limit = message.limit);
    return obj;
  },

  fromPartial(object: DeepPartial<PaginationParam>): PaginationParam {
    const message = { ...basePaginationParam } as PaginationParam;
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    } else {
      message.offset = 0;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    return message;
  },
};

const baseReadStakingDataMethod: object = { method: 0 };

export const ReadStakingDataMethod = {
  encode(
    message: ReadStakingDataMethod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.method !== 0) {
      writer.uint32(8).int32(message.method);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadStakingDataMethod } as ReadStakingDataMethod;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataMethod {
    const message = { ...baseReadStakingDataMethod } as ReadStakingDataMethod;
    if (object.method !== undefined && object.method !== null) {
      message.method = readStakingDataMethod_NameFromJSON(object.method);
    } else {
      message.method = 0;
    }
    return message;
  },

  toJSON(message: ReadStakingDataMethod): unknown {
    const obj: any = {};
    message.method !== undefined &&
      (obj.method = readStakingDataMethod_NameToJSON(message.method));
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataMethod>
  ): ReadStakingDataMethod {
    const message = { ...baseReadStakingDataMethod } as ReadStakingDataMethod;
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    } else {
      message.method = 0;
    }
    return message;
  },
};

const baseReadStakingDataRequest: object = {};

export const ReadStakingDataRequest = {
  encode(
    message: ReadStakingDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.buckets !== undefined) {
      ReadStakingDataRequest_VoteBuckets.encode(
        message.buckets,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.bucketsByVoter !== undefined) {
      ReadStakingDataRequest_VoteBucketsByVoter.encode(
        message.bucketsByVoter,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.bucketsByCandidate !== undefined) {
      ReadStakingDataRequest_VoteBucketsByCandidate.encode(
        message.bucketsByCandidate,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.candidates !== undefined) {
      ReadStakingDataRequest_Candidates.encode(
        message.candidates,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.candidateByName !== undefined) {
      ReadStakingDataRequest_CandidateByName.encode(
        message.candidateByName,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.bucketsByIndexes !== undefined) {
      ReadStakingDataRequest_VoteBucketsByIndexes.encode(
        message.bucketsByIndexes,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.candidateByAddress !== undefined) {
      ReadStakingDataRequest_CandidateByAddress.encode(
        message.candidateByAddress,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.totalStakingAmount !== undefined) {
      ReadStakingDataRequest_TotalStakingAmount.encode(
        message.totalStakingAmount,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.bucketsCount !== undefined) {
      ReadStakingDataRequest_BucketsCount.encode(
        message.bucketsCount,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReadStakingDataRequest } as ReadStakingDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buckets = ReadStakingDataRequest_VoteBuckets.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.bucketsByVoter =
            ReadStakingDataRequest_VoteBucketsByVoter.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.bucketsByCandidate =
            ReadStakingDataRequest_VoteBucketsByCandidate.decode(
              reader,
              reader.uint32()
            );
          break;
        case 4:
          message.candidates = ReadStakingDataRequest_Candidates.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.candidateByName =
            ReadStakingDataRequest_CandidateByName.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.bucketsByIndexes =
            ReadStakingDataRequest_VoteBucketsByIndexes.decode(
              reader,
              reader.uint32()
            );
          break;
        case 7:
          message.candidateByAddress =
            ReadStakingDataRequest_CandidateByAddress.decode(
              reader,
              reader.uint32()
            );
          break;
        case 8:
          message.totalStakingAmount =
            ReadStakingDataRequest_TotalStakingAmount.decode(
              reader,
              reader.uint32()
            );
          break;
        case 9:
          message.bucketsCount = ReadStakingDataRequest_BucketsCount.decode(
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

  fromJSON(object: any): ReadStakingDataRequest {
    const message = { ...baseReadStakingDataRequest } as ReadStakingDataRequest;
    if (object.buckets !== undefined && object.buckets !== null) {
      message.buckets = ReadStakingDataRequest_VoteBuckets.fromJSON(
        object.buckets
      );
    } else {
      message.buckets = undefined;
    }
    if (object.bucketsByVoter !== undefined && object.bucketsByVoter !== null) {
      message.bucketsByVoter =
        ReadStakingDataRequest_VoteBucketsByVoter.fromJSON(
          object.bucketsByVoter
        );
    } else {
      message.bucketsByVoter = undefined;
    }
    if (
      object.bucketsByCandidate !== undefined &&
      object.bucketsByCandidate !== null
    ) {
      message.bucketsByCandidate =
        ReadStakingDataRequest_VoteBucketsByCandidate.fromJSON(
          object.bucketsByCandidate
        );
    } else {
      message.bucketsByCandidate = undefined;
    }
    if (object.candidates !== undefined && object.candidates !== null) {
      message.candidates = ReadStakingDataRequest_Candidates.fromJSON(
        object.candidates
      );
    } else {
      message.candidates = undefined;
    }
    if (
      object.candidateByName !== undefined &&
      object.candidateByName !== null
    ) {
      message.candidateByName = ReadStakingDataRequest_CandidateByName.fromJSON(
        object.candidateByName
      );
    } else {
      message.candidateByName = undefined;
    }
    if (
      object.bucketsByIndexes !== undefined &&
      object.bucketsByIndexes !== null
    ) {
      message.bucketsByIndexes =
        ReadStakingDataRequest_VoteBucketsByIndexes.fromJSON(
          object.bucketsByIndexes
        );
    } else {
      message.bucketsByIndexes = undefined;
    }
    if (
      object.candidateByAddress !== undefined &&
      object.candidateByAddress !== null
    ) {
      message.candidateByAddress =
        ReadStakingDataRequest_CandidateByAddress.fromJSON(
          object.candidateByAddress
        );
    } else {
      message.candidateByAddress = undefined;
    }
    if (
      object.totalStakingAmount !== undefined &&
      object.totalStakingAmount !== null
    ) {
      message.totalStakingAmount =
        ReadStakingDataRequest_TotalStakingAmount.fromJSON(
          object.totalStakingAmount
        );
    } else {
      message.totalStakingAmount = undefined;
    }
    if (object.bucketsCount !== undefined && object.bucketsCount !== null) {
      message.bucketsCount = ReadStakingDataRequest_BucketsCount.fromJSON(
        object.bucketsCount
      );
    } else {
      message.bucketsCount = undefined;
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest): unknown {
    const obj: any = {};
    message.buckets !== undefined &&
      (obj.buckets = message.buckets
        ? ReadStakingDataRequest_VoteBuckets.toJSON(message.buckets)
        : undefined);
    message.bucketsByVoter !== undefined &&
      (obj.bucketsByVoter = message.bucketsByVoter
        ? ReadStakingDataRequest_VoteBucketsByVoter.toJSON(
            message.bucketsByVoter
          )
        : undefined);
    message.bucketsByCandidate !== undefined &&
      (obj.bucketsByCandidate = message.bucketsByCandidate
        ? ReadStakingDataRequest_VoteBucketsByCandidate.toJSON(
            message.bucketsByCandidate
          )
        : undefined);
    message.candidates !== undefined &&
      (obj.candidates = message.candidates
        ? ReadStakingDataRequest_Candidates.toJSON(message.candidates)
        : undefined);
    message.candidateByName !== undefined &&
      (obj.candidateByName = message.candidateByName
        ? ReadStakingDataRequest_CandidateByName.toJSON(message.candidateByName)
        : undefined);
    message.bucketsByIndexes !== undefined &&
      (obj.bucketsByIndexes = message.bucketsByIndexes
        ? ReadStakingDataRequest_VoteBucketsByIndexes.toJSON(
            message.bucketsByIndexes
          )
        : undefined);
    message.candidateByAddress !== undefined &&
      (obj.candidateByAddress = message.candidateByAddress
        ? ReadStakingDataRequest_CandidateByAddress.toJSON(
            message.candidateByAddress
          )
        : undefined);
    message.totalStakingAmount !== undefined &&
      (obj.totalStakingAmount = message.totalStakingAmount
        ? ReadStakingDataRequest_TotalStakingAmount.toJSON(
            message.totalStakingAmount
          )
        : undefined);
    message.bucketsCount !== undefined &&
      (obj.bucketsCount = message.bucketsCount
        ? ReadStakingDataRequest_BucketsCount.toJSON(message.bucketsCount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest>
  ): ReadStakingDataRequest {
    const message = { ...baseReadStakingDataRequest } as ReadStakingDataRequest;
    if (object.buckets !== undefined && object.buckets !== null) {
      message.buckets = ReadStakingDataRequest_VoteBuckets.fromPartial(
        object.buckets
      );
    } else {
      message.buckets = undefined;
    }
    if (object.bucketsByVoter !== undefined && object.bucketsByVoter !== null) {
      message.bucketsByVoter =
        ReadStakingDataRequest_VoteBucketsByVoter.fromPartial(
          object.bucketsByVoter
        );
    } else {
      message.bucketsByVoter = undefined;
    }
    if (
      object.bucketsByCandidate !== undefined &&
      object.bucketsByCandidate !== null
    ) {
      message.bucketsByCandidate =
        ReadStakingDataRequest_VoteBucketsByCandidate.fromPartial(
          object.bucketsByCandidate
        );
    } else {
      message.bucketsByCandidate = undefined;
    }
    if (object.candidates !== undefined && object.candidates !== null) {
      message.candidates = ReadStakingDataRequest_Candidates.fromPartial(
        object.candidates
      );
    } else {
      message.candidates = undefined;
    }
    if (
      object.candidateByName !== undefined &&
      object.candidateByName !== null
    ) {
      message.candidateByName =
        ReadStakingDataRequest_CandidateByName.fromPartial(
          object.candidateByName
        );
    } else {
      message.candidateByName = undefined;
    }
    if (
      object.bucketsByIndexes !== undefined &&
      object.bucketsByIndexes !== null
    ) {
      message.bucketsByIndexes =
        ReadStakingDataRequest_VoteBucketsByIndexes.fromPartial(
          object.bucketsByIndexes
        );
    } else {
      message.bucketsByIndexes = undefined;
    }
    if (
      object.candidateByAddress !== undefined &&
      object.candidateByAddress !== null
    ) {
      message.candidateByAddress =
        ReadStakingDataRequest_CandidateByAddress.fromPartial(
          object.candidateByAddress
        );
    } else {
      message.candidateByAddress = undefined;
    }
    if (
      object.totalStakingAmount !== undefined &&
      object.totalStakingAmount !== null
    ) {
      message.totalStakingAmount =
        ReadStakingDataRequest_TotalStakingAmount.fromPartial(
          object.totalStakingAmount
        );
    } else {
      message.totalStakingAmount = undefined;
    }
    if (object.bucketsCount !== undefined && object.bucketsCount !== null) {
      message.bucketsCount = ReadStakingDataRequest_BucketsCount.fromPartial(
        object.bucketsCount
      );
    } else {
      message.bucketsCount = undefined;
    }
    return message;
  },
};

const baseReadStakingDataRequest_VoteBuckets: object = {};

export const ReadStakingDataRequest_VoteBuckets = {
  encode(
    message: ReadStakingDataRequest_VoteBuckets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PaginationParam.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_VoteBuckets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_VoteBuckets,
    } as ReadStakingDataRequest_VoteBuckets;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PaginationParam.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_VoteBuckets {
    const message = {
      ...baseReadStakingDataRequest_VoteBuckets,
    } as ReadStakingDataRequest_VoteBuckets;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_VoteBuckets): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PaginationParam.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_VoteBuckets>
  ): ReadStakingDataRequest_VoteBuckets {
    const message = {
      ...baseReadStakingDataRequest_VoteBuckets,
    } as ReadStakingDataRequest_VoteBuckets;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseReadStakingDataRequest_VoteBucketsByVoter: object = {
  voterAddress: "",
};

export const ReadStakingDataRequest_VoteBucketsByVoter = {
  encode(
    message: ReadStakingDataRequest_VoteBucketsByVoter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voterAddress !== "") {
      writer.uint32(10).string(message.voterAddress);
    }
    if (message.pagination !== undefined) {
      PaginationParam.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_VoteBucketsByVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByVoter,
    } as ReadStakingDataRequest_VoteBucketsByVoter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterAddress = reader.string();
          break;
        case 2:
          message.pagination = PaginationParam.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_VoteBucketsByVoter {
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByVoter,
    } as ReadStakingDataRequest_VoteBucketsByVoter;
    if (object.voterAddress !== undefined && object.voterAddress !== null) {
      message.voterAddress = String(object.voterAddress);
    } else {
      message.voterAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_VoteBucketsByVoter): unknown {
    const obj: any = {};
    message.voterAddress !== undefined &&
      (obj.voterAddress = message.voterAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PaginationParam.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_VoteBucketsByVoter>
  ): ReadStakingDataRequest_VoteBucketsByVoter {
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByVoter,
    } as ReadStakingDataRequest_VoteBucketsByVoter;
    if (object.voterAddress !== undefined && object.voterAddress !== null) {
      message.voterAddress = object.voterAddress;
    } else {
      message.voterAddress = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseReadStakingDataRequest_VoteBucketsByCandidate: object = {
  candName: "",
};

export const ReadStakingDataRequest_VoteBucketsByCandidate = {
  encode(
    message: ReadStakingDataRequest_VoteBucketsByCandidate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.candName !== "") {
      writer.uint32(10).string(message.candName);
    }
    if (message.pagination !== undefined) {
      PaginationParam.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_VoteBucketsByCandidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByCandidate,
    } as ReadStakingDataRequest_VoteBucketsByCandidate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candName = reader.string();
          break;
        case 2:
          message.pagination = PaginationParam.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_VoteBucketsByCandidate {
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByCandidate,
    } as ReadStakingDataRequest_VoteBucketsByCandidate;
    if (object.candName !== undefined && object.candName !== null) {
      message.candName = String(object.candName);
    } else {
      message.candName = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_VoteBucketsByCandidate): unknown {
    const obj: any = {};
    message.candName !== undefined && (obj.candName = message.candName);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PaginationParam.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_VoteBucketsByCandidate>
  ): ReadStakingDataRequest_VoteBucketsByCandidate {
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByCandidate,
    } as ReadStakingDataRequest_VoteBucketsByCandidate;
    if (object.candName !== undefined && object.candName !== null) {
      message.candName = object.candName;
    } else {
      message.candName = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseReadStakingDataRequest_Candidates: object = {};

export const ReadStakingDataRequest_Candidates = {
  encode(
    message: ReadStakingDataRequest_Candidates,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PaginationParam.encode(
        message.pagination,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_Candidates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_Candidates,
    } as ReadStakingDataRequest_Candidates;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PaginationParam.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_Candidates {
    const message = {
      ...baseReadStakingDataRequest_Candidates,
    } as ReadStakingDataRequest_Candidates;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_Candidates): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PaginationParam.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_Candidates>
  ): ReadStakingDataRequest_Candidates {
    const message = {
      ...baseReadStakingDataRequest_Candidates,
    } as ReadStakingDataRequest_Candidates;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PaginationParam.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseReadStakingDataRequest_CandidateByName: object = { candName: "" };

export const ReadStakingDataRequest_CandidateByName = {
  encode(
    message: ReadStakingDataRequest_CandidateByName,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.candName !== "") {
      writer.uint32(10).string(message.candName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_CandidateByName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_CandidateByName,
    } as ReadStakingDataRequest_CandidateByName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_CandidateByName {
    const message = {
      ...baseReadStakingDataRequest_CandidateByName,
    } as ReadStakingDataRequest_CandidateByName;
    if (object.candName !== undefined && object.candName !== null) {
      message.candName = String(object.candName);
    } else {
      message.candName = "";
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_CandidateByName): unknown {
    const obj: any = {};
    message.candName !== undefined && (obj.candName = message.candName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_CandidateByName>
  ): ReadStakingDataRequest_CandidateByName {
    const message = {
      ...baseReadStakingDataRequest_CandidateByName,
    } as ReadStakingDataRequest_CandidateByName;
    if (object.candName !== undefined && object.candName !== null) {
      message.candName = object.candName;
    } else {
      message.candName = "";
    }
    return message;
  },
};

const baseReadStakingDataRequest_VoteBucketsByIndexes: object = { index: 0 };

export const ReadStakingDataRequest_VoteBucketsByIndexes = {
  encode(
    message: ReadStakingDataRequest_VoteBucketsByIndexes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.index) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_VoteBucketsByIndexes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByIndexes,
    } as ReadStakingDataRequest_VoteBucketsByIndexes;
    message.index = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.index.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.index.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_VoteBucketsByIndexes {
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByIndexes,
    } as ReadStakingDataRequest_VoteBucketsByIndexes;
    message.index = [];
    if (object.index !== undefined && object.index !== null) {
      for (const e of object.index) {
        message.index.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_VoteBucketsByIndexes): unknown {
    const obj: any = {};
    if (message.index) {
      obj.index = message.index.map((e) => e);
    } else {
      obj.index = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_VoteBucketsByIndexes>
  ): ReadStakingDataRequest_VoteBucketsByIndexes {
    const message = {
      ...baseReadStakingDataRequest_VoteBucketsByIndexes,
    } as ReadStakingDataRequest_VoteBucketsByIndexes;
    message.index = [];
    if (object.index !== undefined && object.index !== null) {
      for (const e of object.index) {
        message.index.push(e);
      }
    }
    return message;
  },
};

const baseReadStakingDataRequest_CandidateByAddress: object = { ownerAddr: "" };

export const ReadStakingDataRequest_CandidateByAddress = {
  encode(
    message: ReadStakingDataRequest_CandidateByAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerAddr !== "") {
      writer.uint32(10).string(message.ownerAddr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_CandidateByAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_CandidateByAddress,
    } as ReadStakingDataRequest_CandidateByAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadStakingDataRequest_CandidateByAddress {
    const message = {
      ...baseReadStakingDataRequest_CandidateByAddress,
    } as ReadStakingDataRequest_CandidateByAddress;
    if (object.ownerAddr !== undefined && object.ownerAddr !== null) {
      message.ownerAddr = String(object.ownerAddr);
    } else {
      message.ownerAddr = "";
    }
    return message;
  },

  toJSON(message: ReadStakingDataRequest_CandidateByAddress): unknown {
    const obj: any = {};
    message.ownerAddr !== undefined && (obj.ownerAddr = message.ownerAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReadStakingDataRequest_CandidateByAddress>
  ): ReadStakingDataRequest_CandidateByAddress {
    const message = {
      ...baseReadStakingDataRequest_CandidateByAddress,
    } as ReadStakingDataRequest_CandidateByAddress;
    if (object.ownerAddr !== undefined && object.ownerAddr !== null) {
      message.ownerAddr = object.ownerAddr;
    } else {
      message.ownerAddr = "";
    }
    return message;
  },
};

const baseReadStakingDataRequest_TotalStakingAmount: object = {};

export const ReadStakingDataRequest_TotalStakingAmount = {
  encode(
    _: ReadStakingDataRequest_TotalStakingAmount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_TotalStakingAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_TotalStakingAmount,
    } as ReadStakingDataRequest_TotalStakingAmount;
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

  fromJSON(_: any): ReadStakingDataRequest_TotalStakingAmount {
    const message = {
      ...baseReadStakingDataRequest_TotalStakingAmount,
    } as ReadStakingDataRequest_TotalStakingAmount;
    return message;
  },

  toJSON(_: ReadStakingDataRequest_TotalStakingAmount): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ReadStakingDataRequest_TotalStakingAmount>
  ): ReadStakingDataRequest_TotalStakingAmount {
    const message = {
      ...baseReadStakingDataRequest_TotalStakingAmount,
    } as ReadStakingDataRequest_TotalStakingAmount;
    return message;
  },
};

const baseReadStakingDataRequest_BucketsCount: object = {};

export const ReadStakingDataRequest_BucketsCount = {
  encode(
    _: ReadStakingDataRequest_BucketsCount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReadStakingDataRequest_BucketsCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseReadStakingDataRequest_BucketsCount,
    } as ReadStakingDataRequest_BucketsCount;
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

  fromJSON(_: any): ReadStakingDataRequest_BucketsCount {
    const message = {
      ...baseReadStakingDataRequest_BucketsCount,
    } as ReadStakingDataRequest_BucketsCount;
    return message;
  },

  toJSON(_: ReadStakingDataRequest_BucketsCount): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<ReadStakingDataRequest_BucketsCount>
  ): ReadStakingDataRequest_BucketsCount {
    const message = {
      ...baseReadStakingDataRequest_BucketsCount,
    } as ReadStakingDataRequest_BucketsCount;
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
