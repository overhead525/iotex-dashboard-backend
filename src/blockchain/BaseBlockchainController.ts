import fs from "fs";
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

  constructor(
    path2ConfigFile: string,
    apiBaseURL: string,
    bridgeString: string
  ) {
    this.config = JSON.parse(fs.readFileSync(path2ConfigFile).toString());

    this.contractsObject = JSON.parse(
      fs.readFileSync("../../contracts.json").toString()
    );

    this.apiBaseParams = {
      apiKey: this.config.apiKey || null,
    };

    const connectionConfig: AxiosRequestConfig = {
      baseURL: apiBaseURL,
      timeout: 5000,
    };
    this.apiConnection = axios.create(connectionConfig);

    this.bridgeString = bridgeString;
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
