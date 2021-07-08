import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Action, ActionInfo, Pagination } from "../generated/graphql";
import { RawEtherscanTransactionObject } from "./types";

const getCount = async (
  address: string,
  connection: AxiosInstance
): Promise<number> => {
  const countRequestData = JSON.stringify({
    query: `query {
      action {
        byAddress(address: "${address}") {
          count
        }
      }
    }`,
  });
  const countResponse: AxiosResponse = await connection.post(
    "/query",
    countRequestData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const _countData = countResponse.data.data as { action: Action };
  return _countData.action.byAddress.count;
};

export const filterNumUniqueContractUsers = (
  transactions: RawEtherscanTransactionObject[]
): number => {
  const uniqueUsers: { [key: string]: boolean } = {};

  transactions.forEach((meta) => {
    if (!(meta.from in uniqueUsers)) {
      uniqueUsers[meta.from] = true;
    }
  });

  return Object.keys(uniqueUsers).length;
};

export const filterNumUniqueContractUsersGraphQL = (
  transactions: ActionInfo[]
): number => {
  const uniqueUsers: { [key: string]: boolean } = {};

  transactions.forEach((meta) => {
    if (!(meta.sender in uniqueUsers)) {
      uniqueUsers[meta.sender] = true;
    }
  });

  return Object.keys(uniqueUsers).length;
};

export const fetchTransactionsByAddress = async (
  address: string,
  connection: AxiosInstance,
  baseParams: { [key: string]: string }
): Promise<RawEtherscanTransactionObject[]> => {
  const response: AxiosResponse = await connection.get("/api", {
    params: {
      ...baseParams,
      module: "account",
      action: "txlist",
      address: address,
      sort: "asc",
    },
  });
  const data = response.data as {
    status: string;
    message: string;
    result: RawEtherscanTransactionObject[];
  };
  return data.result;
};

export const constructPaginatedOptions = (
  first: number,
  skip: number
): Pagination => {
  return { first, skip };
};

export const fetchTransactionsByAddressGraphQL = async (
  address: string,
  connection: AxiosInstance
): Promise<ActionInfo[]> => {
  try {
    let count = await getCount(address, connection);
    console.log(`Count is ${count}`);
    let numIterations = Math.floor(count / 100);
    let iteration = 0;
    const transactions: ActionInfo[] = [];

    while (count >= 0) {
      count -= 100;

      const data = JSON.stringify({
        query: `query {
          action {
              byAddress(address: "${address}") {
                  exist
                  count
                  actions(pagination: { first: 100, skip: ${iteration *
                    100} }) {
                    actHash
                    blkHash
                    timeStamp
                    actType
                    sender
                    recipient
                    amount
                    gasFee
                  }
              }
          }
      }`,
        variables: {},
      });
      const response: AxiosResponse = await connection.post("/query", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const _data = response.data.data as { action: Action };
      transactions.push(..._data.action.byAddress.actions);

      iteration++;
    }
    return transactions;
  } catch (error) {
    console.error(error);
  }
};
