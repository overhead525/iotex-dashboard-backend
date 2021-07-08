import {
  EtherscanTransactionObject,
  RawEtherscanTransactionObject,
} from "./types";

export const ParseRawEtherscanTransaction = (
  rawAction: RawEtherscanTransactionObject
): EtherscanTransactionObject => {
  return {
    ...rawAction,
    blockNumber: Number.parseInt(rawAction.blockNumber),
    nonce: Number.parseInt(rawAction.nonce),
    transactionIndex: Number.parseInt(rawAction.transactionIndex),
    value: Number.parseInt(rawAction.value),
    gas: Number.parseInt(rawAction.gas),
    gasPrice: Number.parseInt(rawAction.gasPrice),
    isError: Number.parseInt(rawAction.isError),
    txreceipt_status: Number.parseInt(rawAction.txreceipt_status),
    cumulativeGasUsed: Number.parseInt(rawAction.cumulativeGasUsed),
    gasUsed: Number.parseInt(rawAction.gasUsed),
    confirmations: Number.parseInt(rawAction.confirmations),
  };
};
