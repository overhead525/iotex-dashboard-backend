/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

/** ProbationCandidateList (slashing #1) */
export interface ProbationCandidateList {
  probationList: ProbationCandidateList_Info[];
  intensityRate: number;
}

export interface ProbationCandidateList_Info {
  address: string;
  count: number;
}

export interface VoteBucket {
  index: number;
  candidateAddress: string;
  stakedAmount: string;
  stakedDuration: number;
  createTime: Date | undefined;
  stakeStartTime: Date | undefined;
  unstakeStartTime: Date | undefined;
  autoStake: boolean;
  owner: string;
}

export interface VoteBucketList {
  buckets: VoteBucket[];
}

export interface CandidateV2 {
  ownerAddress: string;
  operatorAddress: string;
  rewardAddress: string;
  name: string;
  totalWeightedVotes: string;
  selfStakeBucketIdx: number;
  selfStakingTokens: string;
}

export interface CandidateListV2 {
  candidates: CandidateV2[];
}

export interface BucketsCount {
  total: number;
  active: number;
}

const baseProbationCandidateList: object = { intensityRate: 0 };

export const ProbationCandidateList = {
  encode(
    message: ProbationCandidateList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.probationList) {
      ProbationCandidateList_Info.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.intensityRate !== 0) {
      writer.uint32(16).uint32(message.intensityRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProbationCandidateList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProbationCandidateList } as ProbationCandidateList;
    message.probationList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.probationList.push(
            ProbationCandidateList_Info.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.intensityRate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProbationCandidateList {
    const message = { ...baseProbationCandidateList } as ProbationCandidateList;
    message.probationList = [];
    if (object.probationList !== undefined && object.probationList !== null) {
      for (const e of object.probationList) {
        message.probationList.push(ProbationCandidateList_Info.fromJSON(e));
      }
    }
    if (object.intensityRate !== undefined && object.intensityRate !== null) {
      message.intensityRate = Number(object.intensityRate);
    } else {
      message.intensityRate = 0;
    }
    return message;
  },

  toJSON(message: ProbationCandidateList): unknown {
    const obj: any = {};
    if (message.probationList) {
      obj.probationList = message.probationList.map((e) =>
        e ? ProbationCandidateList_Info.toJSON(e) : undefined
      );
    } else {
      obj.probationList = [];
    }
    message.intensityRate !== undefined &&
      (obj.intensityRate = message.intensityRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProbationCandidateList>
  ): ProbationCandidateList {
    const message = { ...baseProbationCandidateList } as ProbationCandidateList;
    message.probationList = [];
    if (object.probationList !== undefined && object.probationList !== null) {
      for (const e of object.probationList) {
        message.probationList.push(ProbationCandidateList_Info.fromPartial(e));
      }
    }
    if (object.intensityRate !== undefined && object.intensityRate !== null) {
      message.intensityRate = object.intensityRate;
    } else {
      message.intensityRate = 0;
    }
    return message;
  },
};

const baseProbationCandidateList_Info: object = { address: "", count: 0 };

export const ProbationCandidateList_Info = {
  encode(
    message: ProbationCandidateList_Info,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ProbationCandidateList_Info {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProbationCandidateList_Info,
    } as ProbationCandidateList_Info;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProbationCandidateList_Info {
    const message = {
      ...baseProbationCandidateList_Info,
    } as ProbationCandidateList_Info;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: ProbationCandidateList_Info): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProbationCandidateList_Info>
  ): ProbationCandidateList_Info {
    const message = {
      ...baseProbationCandidateList_Info,
    } as ProbationCandidateList_Info;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseVoteBucket: object = {
  index: 0,
  candidateAddress: "",
  stakedAmount: "",
  stakedDuration: 0,
  autoStake: false,
  owner: "",
};

export const VoteBucket = {
  encode(
    message: VoteBucket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.candidateAddress !== "") {
      writer.uint32(18).string(message.candidateAddress);
    }
    if (message.stakedAmount !== "") {
      writer.uint32(26).string(message.stakedAmount);
    }
    if (message.stakedDuration !== 0) {
      writer.uint32(32).uint32(message.stakedDuration);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.stakeStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.stakeStartTime),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.unstakeStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.unstakeStartTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.autoStake === true) {
      writer.uint32(64).bool(message.autoStake);
    }
    if (message.owner !== "") {
      writer.uint32(74).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteBucket } as VoteBucket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.candidateAddress = reader.string();
          break;
        case 3:
          message.stakedAmount = reader.string();
          break;
        case 4:
          message.stakedDuration = reader.uint32();
          break;
        case 5:
          message.createTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.stakeStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.unstakeStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.autoStake = reader.bool();
          break;
        case 9:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteBucket {
    const message = { ...baseVoteBucket } as VoteBucket;
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    if (
      object.candidateAddress !== undefined &&
      object.candidateAddress !== null
    ) {
      message.candidateAddress = String(object.candidateAddress);
    } else {
      message.candidateAddress = "";
    }
    if (object.stakedAmount !== undefined && object.stakedAmount !== null) {
      message.stakedAmount = String(object.stakedAmount);
    } else {
      message.stakedAmount = "";
    }
    if (object.stakedDuration !== undefined && object.stakedDuration !== null) {
      message.stakedDuration = Number(object.stakedDuration);
    } else {
      message.stakedDuration = 0;
    }
    if (object.createTime !== undefined && object.createTime !== null) {
      message.createTime = fromJsonTimestamp(object.createTime);
    } else {
      message.createTime = undefined;
    }
    if (object.stakeStartTime !== undefined && object.stakeStartTime !== null) {
      message.stakeStartTime = fromJsonTimestamp(object.stakeStartTime);
    } else {
      message.stakeStartTime = undefined;
    }
    if (
      object.unstakeStartTime !== undefined &&
      object.unstakeStartTime !== null
    ) {
      message.unstakeStartTime = fromJsonTimestamp(object.unstakeStartTime);
    } else {
      message.unstakeStartTime = undefined;
    }
    if (object.autoStake !== undefined && object.autoStake !== null) {
      message.autoStake = Boolean(object.autoStake);
    } else {
      message.autoStake = false;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: VoteBucket): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.candidateAddress !== undefined &&
      (obj.candidateAddress = message.candidateAddress);
    message.stakedAmount !== undefined &&
      (obj.stakedAmount = message.stakedAmount);
    message.stakedDuration !== undefined &&
      (obj.stakedDuration = message.stakedDuration);
    message.createTime !== undefined &&
      (obj.createTime = message.createTime.toISOString());
    message.stakeStartTime !== undefined &&
      (obj.stakeStartTime = message.stakeStartTime.toISOString());
    message.unstakeStartTime !== undefined &&
      (obj.unstakeStartTime = message.unstakeStartTime.toISOString());
    message.autoStake !== undefined && (obj.autoStake = message.autoStake);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteBucket>): VoteBucket {
    const message = { ...baseVoteBucket } as VoteBucket;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    if (
      object.candidateAddress !== undefined &&
      object.candidateAddress !== null
    ) {
      message.candidateAddress = object.candidateAddress;
    } else {
      message.candidateAddress = "";
    }
    if (object.stakedAmount !== undefined && object.stakedAmount !== null) {
      message.stakedAmount = object.stakedAmount;
    } else {
      message.stakedAmount = "";
    }
    if (object.stakedDuration !== undefined && object.stakedDuration !== null) {
      message.stakedDuration = object.stakedDuration;
    } else {
      message.stakedDuration = 0;
    }
    if (object.createTime !== undefined && object.createTime !== null) {
      message.createTime = object.createTime;
    } else {
      message.createTime = undefined;
    }
    if (object.stakeStartTime !== undefined && object.stakeStartTime !== null) {
      message.stakeStartTime = object.stakeStartTime;
    } else {
      message.stakeStartTime = undefined;
    }
    if (
      object.unstakeStartTime !== undefined &&
      object.unstakeStartTime !== null
    ) {
      message.unstakeStartTime = object.unstakeStartTime;
    } else {
      message.unstakeStartTime = undefined;
    }
    if (object.autoStake !== undefined && object.autoStake !== null) {
      message.autoStake = object.autoStake;
    } else {
      message.autoStake = false;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseVoteBucketList: object = {};

export const VoteBucketList = {
  encode(
    message: VoteBucketList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.buckets) {
      VoteBucket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteBucketList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteBucketList } as VoteBucketList;
    message.buckets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buckets.push(VoteBucket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteBucketList {
    const message = { ...baseVoteBucketList } as VoteBucketList;
    message.buckets = [];
    if (object.buckets !== undefined && object.buckets !== null) {
      for (const e of object.buckets) {
        message.buckets.push(VoteBucket.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VoteBucketList): unknown {
    const obj: any = {};
    if (message.buckets) {
      obj.buckets = message.buckets.map((e) =>
        e ? VoteBucket.toJSON(e) : undefined
      );
    } else {
      obj.buckets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VoteBucketList>): VoteBucketList {
    const message = { ...baseVoteBucketList } as VoteBucketList;
    message.buckets = [];
    if (object.buckets !== undefined && object.buckets !== null) {
      for (const e of object.buckets) {
        message.buckets.push(VoteBucket.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCandidateV2: object = {
  ownerAddress: "",
  operatorAddress: "",
  rewardAddress: "",
  name: "",
  totalWeightedVotes: "",
  selfStakeBucketIdx: 0,
  selfStakingTokens: "",
};

export const CandidateV2 = {
  encode(
    message: CandidateV2,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(26).string(message.rewardAddress);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.totalWeightedVotes !== "") {
      writer.uint32(42).string(message.totalWeightedVotes);
    }
    if (message.selfStakeBucketIdx !== 0) {
      writer.uint32(48).uint64(message.selfStakeBucketIdx);
    }
    if (message.selfStakingTokens !== "") {
      writer.uint32(58).string(message.selfStakingTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandidateV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCandidateV2 } as CandidateV2;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.rewardAddress = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.totalWeightedVotes = reader.string();
          break;
        case 6:
          message.selfStakeBucketIdx = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.selfStakingTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandidateV2 {
    const message = { ...baseCandidateV2 } as CandidateV2;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = String(object.ownerAddress);
    } else {
      message.ownerAddress = "";
    }
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (object.rewardAddress !== undefined && object.rewardAddress !== null) {
      message.rewardAddress = String(object.rewardAddress);
    } else {
      message.rewardAddress = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.totalWeightedVotes !== undefined &&
      object.totalWeightedVotes !== null
    ) {
      message.totalWeightedVotes = String(object.totalWeightedVotes);
    } else {
      message.totalWeightedVotes = "";
    }
    if (
      object.selfStakeBucketIdx !== undefined &&
      object.selfStakeBucketIdx !== null
    ) {
      message.selfStakeBucketIdx = Number(object.selfStakeBucketIdx);
    } else {
      message.selfStakeBucketIdx = 0;
    }
    if (
      object.selfStakingTokens !== undefined &&
      object.selfStakingTokens !== null
    ) {
      message.selfStakingTokens = String(object.selfStakingTokens);
    } else {
      message.selfStakingTokens = "";
    }
    return message;
  },

  toJSON(message: CandidateV2): unknown {
    const obj: any = {};
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.rewardAddress !== undefined &&
      (obj.rewardAddress = message.rewardAddress);
    message.name !== undefined && (obj.name = message.name);
    message.totalWeightedVotes !== undefined &&
      (obj.totalWeightedVotes = message.totalWeightedVotes);
    message.selfStakeBucketIdx !== undefined &&
      (obj.selfStakeBucketIdx = message.selfStakeBucketIdx);
    message.selfStakingTokens !== undefined &&
      (obj.selfStakingTokens = message.selfStakingTokens);
    return obj;
  },

  fromPartial(object: DeepPartial<CandidateV2>): CandidateV2 {
    const message = { ...baseCandidateV2 } as CandidateV2;
    if (object.ownerAddress !== undefined && object.ownerAddress !== null) {
      message.ownerAddress = object.ownerAddress;
    } else {
      message.ownerAddress = "";
    }
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (object.rewardAddress !== undefined && object.rewardAddress !== null) {
      message.rewardAddress = object.rewardAddress;
    } else {
      message.rewardAddress = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.totalWeightedVotes !== undefined &&
      object.totalWeightedVotes !== null
    ) {
      message.totalWeightedVotes = object.totalWeightedVotes;
    } else {
      message.totalWeightedVotes = "";
    }
    if (
      object.selfStakeBucketIdx !== undefined &&
      object.selfStakeBucketIdx !== null
    ) {
      message.selfStakeBucketIdx = object.selfStakeBucketIdx;
    } else {
      message.selfStakeBucketIdx = 0;
    }
    if (
      object.selfStakingTokens !== undefined &&
      object.selfStakingTokens !== null
    ) {
      message.selfStakingTokens = object.selfStakingTokens;
    } else {
      message.selfStakingTokens = "";
    }
    return message;
  },
};

const baseCandidateListV2: object = {};

export const CandidateListV2 = {
  encode(
    message: CandidateListV2,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.candidates) {
      CandidateV2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandidateListV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCandidateListV2 } as CandidateListV2;
    message.candidates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candidates.push(CandidateV2.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandidateListV2 {
    const message = { ...baseCandidateListV2 } as CandidateListV2;
    message.candidates = [];
    if (object.candidates !== undefined && object.candidates !== null) {
      for (const e of object.candidates) {
        message.candidates.push(CandidateV2.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: CandidateListV2): unknown {
    const obj: any = {};
    if (message.candidates) {
      obj.candidates = message.candidates.map((e) =>
        e ? CandidateV2.toJSON(e) : undefined
      );
    } else {
      obj.candidates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CandidateListV2>): CandidateListV2 {
    const message = { ...baseCandidateListV2 } as CandidateListV2;
    message.candidates = [];
    if (object.candidates !== undefined && object.candidates !== null) {
      for (const e of object.candidates) {
        message.candidates.push(CandidateV2.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBucketsCount: object = { total: 0, active: 0 };

export const BucketsCount = {
  encode(
    message: BucketsCount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint64(message.total);
    }
    if (message.active !== 0) {
      writer.uint32(16).uint64(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BucketsCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBucketsCount } as BucketsCount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.active = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BucketsCount {
    const message = { ...baseBucketsCount } as BucketsCount;
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total);
    } else {
      message.total = 0;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = Number(object.active);
    } else {
      message.active = 0;
    }
    return message;
  },

  toJSON(message: BucketsCount): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<BucketsCount>): BucketsCount {
    const message = { ...baseBucketsCount } as BucketsCount;
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = 0;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    } else {
      message.active = 0;
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
