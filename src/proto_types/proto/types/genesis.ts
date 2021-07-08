/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "iotextypes";

/**
 * To compile the proto, run:
 *      protoc --go_out=plugins=grpc:$GOPATH/src *.proto
 */

export interface Genesis {
  blockchain: GenesisBlockchain | undefined;
  account: GenesisAccount | undefined;
  poll: GenesisPoll | undefined;
  rewarding: GenesisRewarding | undefined;
}

export interface GenesisBlockchain {
  timestamp: number;
  blockGasLimit: number;
  actionGasLimit: number;
  blockInterval: number;
  numSubEpochs: number;
  numDelegates: number;
  numCandidateDelegates: number;
  timeBasedRotation: boolean;
}

export interface GenesisAccount {
  initBalanceAddrs: string[];
  initBalances: string[];
}

export interface GenesisPoll {
  enableGravityChainVoting: boolean;
  gravityChainStartHeight: number;
  registerContractAddress: string;
  stakingContractAddress: string;
  voteThreshold: string;
  scoreThreshold: string;
  selfStakingThreshold: string;
  delegates: GenesisDelegate[];
}

export interface GenesisDelegate {
  operatorAddr: string;
  rewardAddr: string;
  votes: string;
}

export interface GenesisRewarding {
  initAdminAddr: string;
  initBalance: string;
  blockReward: string;
  epochReward: string;
  numDelegatesForEpochReward: number;
  foundationBonus: string;
  numDelegatesForFoundationBonus: number;
  foundationBonusLastEpoch: number;
  productivityThreshold: number;
}

const baseGenesis: object = {};

export const Genesis = {
  encode(
    message: Genesis,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockchain !== undefined) {
      GenesisBlockchain.encode(
        message.blockchain,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.account !== undefined) {
      GenesisAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }
    if (message.poll !== undefined) {
      GenesisPoll.encode(message.poll, writer.uint32(26).fork()).ldelim();
    }
    if (message.rewarding !== undefined) {
      GenesisRewarding.encode(
        message.rewarding,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Genesis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesis } as Genesis;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockchain = GenesisBlockchain.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.account = GenesisAccount.decode(reader, reader.uint32());
          break;
        case 3:
          message.poll = GenesisPoll.decode(reader, reader.uint32());
          break;
        case 4:
          message.rewarding = GenesisRewarding.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Genesis {
    const message = { ...baseGenesis } as Genesis;
    if (object.blockchain !== undefined && object.blockchain !== null) {
      message.blockchain = GenesisBlockchain.fromJSON(object.blockchain);
    } else {
      message.blockchain = undefined;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = GenesisAccount.fromJSON(object.account);
    } else {
      message.account = undefined;
    }
    if (object.poll !== undefined && object.poll !== null) {
      message.poll = GenesisPoll.fromJSON(object.poll);
    } else {
      message.poll = undefined;
    }
    if (object.rewarding !== undefined && object.rewarding !== null) {
      message.rewarding = GenesisRewarding.fromJSON(object.rewarding);
    } else {
      message.rewarding = undefined;
    }
    return message;
  },

  toJSON(message: Genesis): unknown {
    const obj: any = {};
    message.blockchain !== undefined &&
      (obj.blockchain = message.blockchain
        ? GenesisBlockchain.toJSON(message.blockchain)
        : undefined);
    message.account !== undefined &&
      (obj.account = message.account
        ? GenesisAccount.toJSON(message.account)
        : undefined);
    message.poll !== undefined &&
      (obj.poll = message.poll ? GenesisPoll.toJSON(message.poll) : undefined);
    message.rewarding !== undefined &&
      (obj.rewarding = message.rewarding
        ? GenesisRewarding.toJSON(message.rewarding)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Genesis>): Genesis {
    const message = { ...baseGenesis } as Genesis;
    if (object.blockchain !== undefined && object.blockchain !== null) {
      message.blockchain = GenesisBlockchain.fromPartial(object.blockchain);
    } else {
      message.blockchain = undefined;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = GenesisAccount.fromPartial(object.account);
    } else {
      message.account = undefined;
    }
    if (object.poll !== undefined && object.poll !== null) {
      message.poll = GenesisPoll.fromPartial(object.poll);
    } else {
      message.poll = undefined;
    }
    if (object.rewarding !== undefined && object.rewarding !== null) {
      message.rewarding = GenesisRewarding.fromPartial(object.rewarding);
    } else {
      message.rewarding = undefined;
    }
    return message;
  },
};

const baseGenesisBlockchain: object = {
  timestamp: 0,
  blockGasLimit: 0,
  actionGasLimit: 0,
  blockInterval: 0,
  numSubEpochs: 0,
  numDelegates: 0,
  numCandidateDelegates: 0,
  timeBasedRotation: false,
};

export const GenesisBlockchain = {
  encode(
    message: GenesisBlockchain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.blockGasLimit !== 0) {
      writer.uint32(16).uint64(message.blockGasLimit);
    }
    if (message.actionGasLimit !== 0) {
      writer.uint32(24).uint64(message.actionGasLimit);
    }
    if (message.blockInterval !== 0) {
      writer.uint32(32).int64(message.blockInterval);
    }
    if (message.numSubEpochs !== 0) {
      writer.uint32(40).uint64(message.numSubEpochs);
    }
    if (message.numDelegates !== 0) {
      writer.uint32(48).uint64(message.numDelegates);
    }
    if (message.numCandidateDelegates !== 0) {
      writer.uint32(56).uint64(message.numCandidateDelegates);
    }
    if (message.timeBasedRotation === true) {
      writer.uint32(64).bool(message.timeBasedRotation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisBlockchain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisBlockchain } as GenesisBlockchain;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.blockGasLimit = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.actionGasLimit = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.blockInterval = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.numSubEpochs = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.numDelegates = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.numCandidateDelegates = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.timeBasedRotation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisBlockchain {
    const message = { ...baseGenesisBlockchain } as GenesisBlockchain;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.blockGasLimit !== undefined && object.blockGasLimit !== null) {
      message.blockGasLimit = Number(object.blockGasLimit);
    } else {
      message.blockGasLimit = 0;
    }
    if (object.actionGasLimit !== undefined && object.actionGasLimit !== null) {
      message.actionGasLimit = Number(object.actionGasLimit);
    } else {
      message.actionGasLimit = 0;
    }
    if (object.blockInterval !== undefined && object.blockInterval !== null) {
      message.blockInterval = Number(object.blockInterval);
    } else {
      message.blockInterval = 0;
    }
    if (object.numSubEpochs !== undefined && object.numSubEpochs !== null) {
      message.numSubEpochs = Number(object.numSubEpochs);
    } else {
      message.numSubEpochs = 0;
    }
    if (object.numDelegates !== undefined && object.numDelegates !== null) {
      message.numDelegates = Number(object.numDelegates);
    } else {
      message.numDelegates = 0;
    }
    if (
      object.numCandidateDelegates !== undefined &&
      object.numCandidateDelegates !== null
    ) {
      message.numCandidateDelegates = Number(object.numCandidateDelegates);
    } else {
      message.numCandidateDelegates = 0;
    }
    if (
      object.timeBasedRotation !== undefined &&
      object.timeBasedRotation !== null
    ) {
      message.timeBasedRotation = Boolean(object.timeBasedRotation);
    } else {
      message.timeBasedRotation = false;
    }
    return message;
  },

  toJSON(message: GenesisBlockchain): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.blockGasLimit !== undefined &&
      (obj.blockGasLimit = message.blockGasLimit);
    message.actionGasLimit !== undefined &&
      (obj.actionGasLimit = message.actionGasLimit);
    message.blockInterval !== undefined &&
      (obj.blockInterval = message.blockInterval);
    message.numSubEpochs !== undefined &&
      (obj.numSubEpochs = message.numSubEpochs);
    message.numDelegates !== undefined &&
      (obj.numDelegates = message.numDelegates);
    message.numCandidateDelegates !== undefined &&
      (obj.numCandidateDelegates = message.numCandidateDelegates);
    message.timeBasedRotation !== undefined &&
      (obj.timeBasedRotation = message.timeBasedRotation);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisBlockchain>): GenesisBlockchain {
    const message = { ...baseGenesisBlockchain } as GenesisBlockchain;
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.blockGasLimit !== undefined && object.blockGasLimit !== null) {
      message.blockGasLimit = object.blockGasLimit;
    } else {
      message.blockGasLimit = 0;
    }
    if (object.actionGasLimit !== undefined && object.actionGasLimit !== null) {
      message.actionGasLimit = object.actionGasLimit;
    } else {
      message.actionGasLimit = 0;
    }
    if (object.blockInterval !== undefined && object.blockInterval !== null) {
      message.blockInterval = object.blockInterval;
    } else {
      message.blockInterval = 0;
    }
    if (object.numSubEpochs !== undefined && object.numSubEpochs !== null) {
      message.numSubEpochs = object.numSubEpochs;
    } else {
      message.numSubEpochs = 0;
    }
    if (object.numDelegates !== undefined && object.numDelegates !== null) {
      message.numDelegates = object.numDelegates;
    } else {
      message.numDelegates = 0;
    }
    if (
      object.numCandidateDelegates !== undefined &&
      object.numCandidateDelegates !== null
    ) {
      message.numCandidateDelegates = object.numCandidateDelegates;
    } else {
      message.numCandidateDelegates = 0;
    }
    if (
      object.timeBasedRotation !== undefined &&
      object.timeBasedRotation !== null
    ) {
      message.timeBasedRotation = object.timeBasedRotation;
    } else {
      message.timeBasedRotation = false;
    }
    return message;
  },
};

const baseGenesisAccount: object = { initBalanceAddrs: "", initBalances: "" };

export const GenesisAccount = {
  encode(
    message: GenesisAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.initBalanceAddrs) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.initBalances) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisAccount } as GenesisAccount;
    message.initBalanceAddrs = [];
    message.initBalances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initBalanceAddrs.push(reader.string());
          break;
        case 2:
          message.initBalances.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisAccount {
    const message = { ...baseGenesisAccount } as GenesisAccount;
    message.initBalanceAddrs = [];
    message.initBalances = [];
    if (
      object.initBalanceAddrs !== undefined &&
      object.initBalanceAddrs !== null
    ) {
      for (const e of object.initBalanceAddrs) {
        message.initBalanceAddrs.push(String(e));
      }
    }
    if (object.initBalances !== undefined && object.initBalances !== null) {
      for (const e of object.initBalances) {
        message.initBalances.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisAccount): unknown {
    const obj: any = {};
    if (message.initBalanceAddrs) {
      obj.initBalanceAddrs = message.initBalanceAddrs.map((e) => e);
    } else {
      obj.initBalanceAddrs = [];
    }
    if (message.initBalances) {
      obj.initBalances = message.initBalances.map((e) => e);
    } else {
      obj.initBalances = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisAccount>): GenesisAccount {
    const message = { ...baseGenesisAccount } as GenesisAccount;
    message.initBalanceAddrs = [];
    message.initBalances = [];
    if (
      object.initBalanceAddrs !== undefined &&
      object.initBalanceAddrs !== null
    ) {
      for (const e of object.initBalanceAddrs) {
        message.initBalanceAddrs.push(e);
      }
    }
    if (object.initBalances !== undefined && object.initBalances !== null) {
      for (const e of object.initBalances) {
        message.initBalances.push(e);
      }
    }
    return message;
  },
};

const baseGenesisPoll: object = {
  enableGravityChainVoting: false,
  gravityChainStartHeight: 0,
  registerContractAddress: "",
  stakingContractAddress: "",
  voteThreshold: "",
  scoreThreshold: "",
  selfStakingThreshold: "",
};

export const GenesisPoll = {
  encode(
    message: GenesisPoll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enableGravityChainVoting === true) {
      writer.uint32(8).bool(message.enableGravityChainVoting);
    }
    if (message.gravityChainStartHeight !== 0) {
      writer.uint32(16).uint64(message.gravityChainStartHeight);
    }
    if (message.registerContractAddress !== "") {
      writer.uint32(26).string(message.registerContractAddress);
    }
    if (message.stakingContractAddress !== "") {
      writer.uint32(34).string(message.stakingContractAddress);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(42).string(message.voteThreshold);
    }
    if (message.scoreThreshold !== "") {
      writer.uint32(50).string(message.scoreThreshold);
    }
    if (message.selfStakingThreshold !== "") {
      writer.uint32(58).string(message.selfStakingThreshold);
    }
    for (const v of message.delegates) {
      GenesisDelegate.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisPoll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisPoll } as GenesisPoll;
    message.delegates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableGravityChainVoting = reader.bool();
          break;
        case 2:
          message.gravityChainStartHeight = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 3:
          message.registerContractAddress = reader.string();
          break;
        case 4:
          message.stakingContractAddress = reader.string();
          break;
        case 5:
          message.voteThreshold = reader.string();
          break;
        case 6:
          message.scoreThreshold = reader.string();
          break;
        case 7:
          message.selfStakingThreshold = reader.string();
          break;
        case 8:
          message.delegates.push(
            GenesisDelegate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisPoll {
    const message = { ...baseGenesisPoll } as GenesisPoll;
    message.delegates = [];
    if (
      object.enableGravityChainVoting !== undefined &&
      object.enableGravityChainVoting !== null
    ) {
      message.enableGravityChainVoting = Boolean(
        object.enableGravityChainVoting
      );
    } else {
      message.enableGravityChainVoting = false;
    }
    if (
      object.gravityChainStartHeight !== undefined &&
      object.gravityChainStartHeight !== null
    ) {
      message.gravityChainStartHeight = Number(object.gravityChainStartHeight);
    } else {
      message.gravityChainStartHeight = 0;
    }
    if (
      object.registerContractAddress !== undefined &&
      object.registerContractAddress !== null
    ) {
      message.registerContractAddress = String(object.registerContractAddress);
    } else {
      message.registerContractAddress = "";
    }
    if (
      object.stakingContractAddress !== undefined &&
      object.stakingContractAddress !== null
    ) {
      message.stakingContractAddress = String(object.stakingContractAddress);
    } else {
      message.stakingContractAddress = "";
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = String(object.voteThreshold);
    } else {
      message.voteThreshold = "";
    }
    if (object.scoreThreshold !== undefined && object.scoreThreshold !== null) {
      message.scoreThreshold = String(object.scoreThreshold);
    } else {
      message.scoreThreshold = "";
    }
    if (
      object.selfStakingThreshold !== undefined &&
      object.selfStakingThreshold !== null
    ) {
      message.selfStakingThreshold = String(object.selfStakingThreshold);
    } else {
      message.selfStakingThreshold = "";
    }
    if (object.delegates !== undefined && object.delegates !== null) {
      for (const e of object.delegates) {
        message.delegates.push(GenesisDelegate.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisPoll): unknown {
    const obj: any = {};
    message.enableGravityChainVoting !== undefined &&
      (obj.enableGravityChainVoting = message.enableGravityChainVoting);
    message.gravityChainStartHeight !== undefined &&
      (obj.gravityChainStartHeight = message.gravityChainStartHeight);
    message.registerContractAddress !== undefined &&
      (obj.registerContractAddress = message.registerContractAddress);
    message.stakingContractAddress !== undefined &&
      (obj.stakingContractAddress = message.stakingContractAddress);
    message.voteThreshold !== undefined &&
      (obj.voteThreshold = message.voteThreshold);
    message.scoreThreshold !== undefined &&
      (obj.scoreThreshold = message.scoreThreshold);
    message.selfStakingThreshold !== undefined &&
      (obj.selfStakingThreshold = message.selfStakingThreshold);
    if (message.delegates) {
      obj.delegates = message.delegates.map((e) =>
        e ? GenesisDelegate.toJSON(e) : undefined
      );
    } else {
      obj.delegates = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisPoll>): GenesisPoll {
    const message = { ...baseGenesisPoll } as GenesisPoll;
    message.delegates = [];
    if (
      object.enableGravityChainVoting !== undefined &&
      object.enableGravityChainVoting !== null
    ) {
      message.enableGravityChainVoting = object.enableGravityChainVoting;
    } else {
      message.enableGravityChainVoting = false;
    }
    if (
      object.gravityChainStartHeight !== undefined &&
      object.gravityChainStartHeight !== null
    ) {
      message.gravityChainStartHeight = object.gravityChainStartHeight;
    } else {
      message.gravityChainStartHeight = 0;
    }
    if (
      object.registerContractAddress !== undefined &&
      object.registerContractAddress !== null
    ) {
      message.registerContractAddress = object.registerContractAddress;
    } else {
      message.registerContractAddress = "";
    }
    if (
      object.stakingContractAddress !== undefined &&
      object.stakingContractAddress !== null
    ) {
      message.stakingContractAddress = object.stakingContractAddress;
    } else {
      message.stakingContractAddress = "";
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = object.voteThreshold;
    } else {
      message.voteThreshold = "";
    }
    if (object.scoreThreshold !== undefined && object.scoreThreshold !== null) {
      message.scoreThreshold = object.scoreThreshold;
    } else {
      message.scoreThreshold = "";
    }
    if (
      object.selfStakingThreshold !== undefined &&
      object.selfStakingThreshold !== null
    ) {
      message.selfStakingThreshold = object.selfStakingThreshold;
    } else {
      message.selfStakingThreshold = "";
    }
    if (object.delegates !== undefined && object.delegates !== null) {
      for (const e of object.delegates) {
        message.delegates.push(GenesisDelegate.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisDelegate: object = {
  operatorAddr: "",
  rewardAddr: "",
  votes: "",
};

export const GenesisDelegate = {
  encode(
    message: GenesisDelegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorAddr !== "") {
      writer.uint32(10).string(message.operatorAddr);
    }
    if (message.rewardAddr !== "") {
      writer.uint32(18).string(message.rewardAddr);
    }
    if (message.votes !== "") {
      writer.uint32(26).string(message.votes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisDelegate } as GenesisDelegate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddr = reader.string();
          break;
        case 2:
          message.rewardAddr = reader.string();
          break;
        case 3:
          message.votes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisDelegate {
    const message = { ...baseGenesisDelegate } as GenesisDelegate;
    if (object.operatorAddr !== undefined && object.operatorAddr !== null) {
      message.operatorAddr = String(object.operatorAddr);
    } else {
      message.operatorAddr = "";
    }
    if (object.rewardAddr !== undefined && object.rewardAddr !== null) {
      message.rewardAddr = String(object.rewardAddr);
    } else {
      message.rewardAddr = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = String(object.votes);
    } else {
      message.votes = "";
    }
    return message;
  },

  toJSON(message: GenesisDelegate): unknown {
    const obj: any = {};
    message.operatorAddr !== undefined &&
      (obj.operatorAddr = message.operatorAddr);
    message.rewardAddr !== undefined && (obj.rewardAddr = message.rewardAddr);
    message.votes !== undefined && (obj.votes = message.votes);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisDelegate>): GenesisDelegate {
    const message = { ...baseGenesisDelegate } as GenesisDelegate;
    if (object.operatorAddr !== undefined && object.operatorAddr !== null) {
      message.operatorAddr = object.operatorAddr;
    } else {
      message.operatorAddr = "";
    }
    if (object.rewardAddr !== undefined && object.rewardAddr !== null) {
      message.rewardAddr = object.rewardAddr;
    } else {
      message.rewardAddr = "";
    }
    if (object.votes !== undefined && object.votes !== null) {
      message.votes = object.votes;
    } else {
      message.votes = "";
    }
    return message;
  },
};

const baseGenesisRewarding: object = {
  initAdminAddr: "",
  initBalance: "",
  blockReward: "",
  epochReward: "",
  numDelegatesForEpochReward: 0,
  foundationBonus: "",
  numDelegatesForFoundationBonus: 0,
  foundationBonusLastEpoch: 0,
  productivityThreshold: 0,
};

export const GenesisRewarding = {
  encode(
    message: GenesisRewarding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initAdminAddr !== "") {
      writer.uint32(10).string(message.initAdminAddr);
    }
    if (message.initBalance !== "") {
      writer.uint32(18).string(message.initBalance);
    }
    if (message.blockReward !== "") {
      writer.uint32(26).string(message.blockReward);
    }
    if (message.epochReward !== "") {
      writer.uint32(34).string(message.epochReward);
    }
    if (message.numDelegatesForEpochReward !== 0) {
      writer.uint32(40).uint64(message.numDelegatesForEpochReward);
    }
    if (message.foundationBonus !== "") {
      writer.uint32(50).string(message.foundationBonus);
    }
    if (message.numDelegatesForFoundationBonus !== 0) {
      writer.uint32(56).uint64(message.numDelegatesForFoundationBonus);
    }
    if (message.foundationBonusLastEpoch !== 0) {
      writer.uint32(64).uint64(message.foundationBonusLastEpoch);
    }
    if (message.productivityThreshold !== 0) {
      writer.uint32(72).uint64(message.productivityThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisRewarding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisRewarding } as GenesisRewarding;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initAdminAddr = reader.string();
          break;
        case 2:
          message.initBalance = reader.string();
          break;
        case 3:
          message.blockReward = reader.string();
          break;
        case 4:
          message.epochReward = reader.string();
          break;
        case 5:
          message.numDelegatesForEpochReward = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 6:
          message.foundationBonus = reader.string();
          break;
        case 7:
          message.numDelegatesForFoundationBonus = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 8:
          message.foundationBonusLastEpoch = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 9:
          message.productivityThreshold = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisRewarding {
    const message = { ...baseGenesisRewarding } as GenesisRewarding;
    if (object.initAdminAddr !== undefined && object.initAdminAddr !== null) {
      message.initAdminAddr = String(object.initAdminAddr);
    } else {
      message.initAdminAddr = "";
    }
    if (object.initBalance !== undefined && object.initBalance !== null) {
      message.initBalance = String(object.initBalance);
    } else {
      message.initBalance = "";
    }
    if (object.blockReward !== undefined && object.blockReward !== null) {
      message.blockReward = String(object.blockReward);
    } else {
      message.blockReward = "";
    }
    if (object.epochReward !== undefined && object.epochReward !== null) {
      message.epochReward = String(object.epochReward);
    } else {
      message.epochReward = "";
    }
    if (
      object.numDelegatesForEpochReward !== undefined &&
      object.numDelegatesForEpochReward !== null
    ) {
      message.numDelegatesForEpochReward = Number(
        object.numDelegatesForEpochReward
      );
    } else {
      message.numDelegatesForEpochReward = 0;
    }
    if (
      object.foundationBonus !== undefined &&
      object.foundationBonus !== null
    ) {
      message.foundationBonus = String(object.foundationBonus);
    } else {
      message.foundationBonus = "";
    }
    if (
      object.numDelegatesForFoundationBonus !== undefined &&
      object.numDelegatesForFoundationBonus !== null
    ) {
      message.numDelegatesForFoundationBonus = Number(
        object.numDelegatesForFoundationBonus
      );
    } else {
      message.numDelegatesForFoundationBonus = 0;
    }
    if (
      object.foundationBonusLastEpoch !== undefined &&
      object.foundationBonusLastEpoch !== null
    ) {
      message.foundationBonusLastEpoch = Number(
        object.foundationBonusLastEpoch
      );
    } else {
      message.foundationBonusLastEpoch = 0;
    }
    if (
      object.productivityThreshold !== undefined &&
      object.productivityThreshold !== null
    ) {
      message.productivityThreshold = Number(object.productivityThreshold);
    } else {
      message.productivityThreshold = 0;
    }
    return message;
  },

  toJSON(message: GenesisRewarding): unknown {
    const obj: any = {};
    message.initAdminAddr !== undefined &&
      (obj.initAdminAddr = message.initAdminAddr);
    message.initBalance !== undefined &&
      (obj.initBalance = message.initBalance);
    message.blockReward !== undefined &&
      (obj.blockReward = message.blockReward);
    message.epochReward !== undefined &&
      (obj.epochReward = message.epochReward);
    message.numDelegatesForEpochReward !== undefined &&
      (obj.numDelegatesForEpochReward = message.numDelegatesForEpochReward);
    message.foundationBonus !== undefined &&
      (obj.foundationBonus = message.foundationBonus);
    message.numDelegatesForFoundationBonus !== undefined &&
      (obj.numDelegatesForFoundationBonus =
        message.numDelegatesForFoundationBonus);
    message.foundationBonusLastEpoch !== undefined &&
      (obj.foundationBonusLastEpoch = message.foundationBonusLastEpoch);
    message.productivityThreshold !== undefined &&
      (obj.productivityThreshold = message.productivityThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisRewarding>): GenesisRewarding {
    const message = { ...baseGenesisRewarding } as GenesisRewarding;
    if (object.initAdminAddr !== undefined && object.initAdminAddr !== null) {
      message.initAdminAddr = object.initAdminAddr;
    } else {
      message.initAdminAddr = "";
    }
    if (object.initBalance !== undefined && object.initBalance !== null) {
      message.initBalance = object.initBalance;
    } else {
      message.initBalance = "";
    }
    if (object.blockReward !== undefined && object.blockReward !== null) {
      message.blockReward = object.blockReward;
    } else {
      message.blockReward = "";
    }
    if (object.epochReward !== undefined && object.epochReward !== null) {
      message.epochReward = object.epochReward;
    } else {
      message.epochReward = "";
    }
    if (
      object.numDelegatesForEpochReward !== undefined &&
      object.numDelegatesForEpochReward !== null
    ) {
      message.numDelegatesForEpochReward = object.numDelegatesForEpochReward;
    } else {
      message.numDelegatesForEpochReward = 0;
    }
    if (
      object.foundationBonus !== undefined &&
      object.foundationBonus !== null
    ) {
      message.foundationBonus = object.foundationBonus;
    } else {
      message.foundationBonus = "";
    }
    if (
      object.numDelegatesForFoundationBonus !== undefined &&
      object.numDelegatesForFoundationBonus !== null
    ) {
      message.numDelegatesForFoundationBonus =
        object.numDelegatesForFoundationBonus;
    } else {
      message.numDelegatesForFoundationBonus = 0;
    }
    if (
      object.foundationBonusLastEpoch !== undefined &&
      object.foundationBonusLastEpoch !== null
    ) {
      message.foundationBonusLastEpoch = object.foundationBonusLastEpoch;
    } else {
      message.foundationBonusLastEpoch = 0;
    }
    if (
      object.productivityThreshold !== undefined &&
      object.productivityThreshold !== null
    ) {
      message.productivityThreshold = object.productivityThreshold;
    } else {
      message.productivityThreshold = 0;
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
