import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import fs from "fs";
import {
  ContractsObject,
  EtherscanConfigObject,
  EtherscanTransactionObject,
  RawEtherscanTransactionObject,
} from "./types";

export class EthereumBlockchainController {
  etherscanConfig: EtherscanConfigObject;
  etherscanAPIConnection: AxiosInstance;
  etherscanAPIBaseParams: { [key: string]: string };
  contractsObject: ContractsObject;

  constructor() {
    this.etherscanConfig = JSON.parse(
      fs.readFileSync("../../etherscan.config.json").toString()
    );

    this.contractsObject = JSON.parse(
      fs.readFileSync("../../contracts.json").toString()
    );

    this.etherscanAPIBaseParams = {
      apikey: this.etherscanConfig.apiKey,
    };

    const connectionConfig: AxiosRequestConfig = {
      baseURL: "https://api.etherscan.io",
      timeout: 5000,
    };
    this.etherscanAPIConnection = axios.create(connectionConfig);
  }

  private filterNumUniqueContractUsers(
    transactions: RawEtherscanTransactionObject[]
  ): number {
    const uniqueUsers: { [key: string]: boolean } = {};

    transactions.forEach((meta) => {
      if (!(meta.from in uniqueUsers)) {
        uniqueUsers[meta.from] = true;
      }
    });

    return Object.keys(uniqueUsers).length;
  }

  private async fetchTransactionsByAddress(
    address: string
  ): Promise<RawEtherscanTransactionObject[]> {
    const response: AxiosResponse = await this.etherscanAPIConnection.get(
      "/api",
      {
        params: {
          ...this.etherscanAPIBaseParams,
          module: "account",
          action: "txlist",
          address: address,
          sort: "asc",
        },
      }
    );
    const data = response.data as {
      status: string;
      message: string;
      result: RawEtherscanTransactionObject[];
    };
    return data.result;
  }

  public async getNumUniqueBridgeUsers() {
    const transactions = await this.fetchTransactionsByAddress(
      this.contractsObject.ethereum2iotx.tokenCashier
    );
    return this.filterNumUniqueContractUsers(transactions);
  }
}

const main = async () => {
  const ebc = new EthereumBlockchainController();
  console.log(await ebc.getNumUniqueBridgeUsers());
};

main();
