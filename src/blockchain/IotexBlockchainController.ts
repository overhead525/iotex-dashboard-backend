import fs from "fs";
import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ServiceClientConstructor } from "@grpc/grpc-js/build/src/make-client";
import { ContractsObject, MainnetConfigObject, SummaryResult } from "./types";
import {
  ActionInfo,
  GetActionsByAddressRequest,
  GetActionsResponse,
} from "../proto_types/proto/api/api";

const PROTO_PATH = path.resolve(
  __dirname,
  "../../lib/iotex-proto/proto/api/api.proto"
);

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: ["../../lib/iotex-proto"],
});

export class IotexBlockchainController {
  contractsObj: ContractsObject;
  MainnetConfigObj: MainnetConfigObject;
  client;
  iotexapi_proto:
    | protoLoader.ProtobufTypeDefinition
    | grpc.GrpcObject
    | ServiceClientConstructor;

  constructor() {
    this.contractsObj = JSON.parse(
      fs
        .readFileSync(path.resolve(__dirname, "../../contracts.json"))
        .toString()
    );
    this.MainnetConfigObj = JSON.parse(
      fs
        .readFileSync(path.resolve(__dirname, "../../mainnet.config.json"))
        .toString()
    );
    this.iotexapi_proto = grpc.loadPackageDefinition(
      packageDefinition
    ).iotexapi;
    // @ts-ignore
    this.client = new this.iotexapi_proto.APIService(
      this.MainnetConfigObj.target,
      grpc.credentials.createSsl()
    );
  }

  private filterNumUniqueContractUsers(actions: ActionInfo[]): number {
    const uniqueUsers: { [key: string]: boolean } = {};

    actions.forEach((meta) => {
      if (!(meta.sender in uniqueUsers)) {
        uniqueUsers[meta.sender] = true;
      }
    });

    return Object.keys(uniqueUsers).length;
  }

  // private filterNumWithoutLegacyIOTXTransactions(
  //   actions: ActionInfo[]
  // ): number {
  //   actions.filter((action) => {});
  // }

  public async getNumUniqueBridgeUsers(bridge: string) {
    const request: GetActionsByAddressRequest = {
      address: this.contractsObj[bridge].tokenCashier,
      start: 0,
      count: 1000,
    };
    const p = await new Promise((resolve, reject) => {
      this.client.GetActions(
        {
          byAddr: { ...request },
        },
        (err: any, response: GetActionsResponse) => {
          if (!err) {
            resolve(this.filterNumUniqueContractUsers(response.actionInfo));
            return;
          }
          reject(err);
          return;
        }
      );
    });
    return p as number;
  }
}
