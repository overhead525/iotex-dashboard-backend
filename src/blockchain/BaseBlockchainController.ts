import fs from "fs";
import path from "path";
import Parse, { ObjectConstructor } from "parse/node";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ContractsObject, ScanConfigObject } from "./types";
import {
  fetchTransactionsByAddress,
  filterNumUniqueContractUsers,
} from "./shared";

export class BaseBlockchainController {
  config: ScanConfigObject;
  apiConnection: AxiosInstance;
  apiBaseParams: { [key: string]: string };
  contractsObject: ContractsObject;
  bridgeString: string;
  bridgeObject: ObjectConstructor;

  constructor(
    path2ConfigFile: string,
    apiBaseURL: string,
    bridgeString: string
  ) {
    this.config = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, path2ConfigFile)).toString()
    );

    this.contractsObject = JSON.parse(
      fs
        .readFileSync(path.resolve(__dirname, "../../contracts.json"))
        .toString()
    );

    this.apiBaseParams = {
      apiKey: this.config.apiKey || null,
    };

    const connectionConfig: AxiosRequestConfig = {
      baseURL: apiBaseURL,
      timeout: 10000,
    };
    this.apiConnection = axios.create(connectionConfig);

    this.bridgeString = bridgeString;
    this.bridgeObject = Parse.Object.extend("Bridge");
  }

  public async scrapeAndGatherCashierTransactions(): Promise<number> {
    try {
      const transactions = await fetchTransactionsByAddress(
        this.contractsObject[this.bridgeString].tokenCashier,
        this.apiConnection,
        this.apiBaseParams
      );

      const RawEtherscanTransactionObjectReference: ObjectConstructor = Parse.Object.extend(
        "RawEtherscanTransactionObject"
      );
      const bridgeQuery = new Parse.Query("Bridge");

      for await (const transaction of transactions) {
        const obj = new RawEtherscanTransactionObjectReference();
        await obj.save({
          ...transaction,
          belongsToBridge: bridgeQuery.equalTo("title", this.bridgeString),
        });
      }

      return 0;
    } catch (error) {
      console.error(error);
      return 1;
    }
  }

  public async getNumUniqueBridgeUsers(): Promise<number> {
    const transactions = await fetchTransactionsByAddress(
      this.contractsObject[this.bridgeString].tokenCashier,
      this.apiConnection,
      this.apiBaseParams
    );
    return filterNumUniqueContractUsers(transactions);
  }
}
