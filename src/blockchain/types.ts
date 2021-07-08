export interface ContractsObject {
  iotx2ethereum: {
    wrappedIOTX: string;
    tokenSafe: string;
    minterPool: string;
    standardTokenList: string;
    proxyTokenList: string;
    witnessList: string;
    tokenCashier: string;
    transferValidator: string;
  };
  iotx2binance: {
    validator: string;
    standardTokenList: string;
    proxyTokenList: string;
    tokenCashier: string;
  };
  iotx2polygon: {
    validator: string;
    standardTokenList: string;
    proxyTokenList: string;
    tokenCashier: string;
  };
  ethereum2iotx: {
    WETH: string;
    standardTokenList: string;
    proxyTokenList: string;
    witnessList: string;
    tokenSafe: string;
    minterPool: string;
    tokenCashier: string;
    transferValidator: string;
  };
  [key: string]: {
    [key: string]: string;
  };
}

export interface MainnetConfigObject {
  target: string;
}

export interface EtherscanConfigObject {
  apiKey: string;
}

export interface RawEtherscanTransactionObject {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
}

export interface EtherscanTransactionObject {
  blockNumber: number;
  timeStamp: string;
  hash: string;
  nonce: number;
  blockHash: string;
  transactionIndex: number;
  from: string;
  to: string;
  value: number;
  gas: number;
  gasPrice: number;
  isError: number;
  txreceipt_status: number;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: number;
  gasUsed: number;
  confirmations: number;
}

export interface SummaryResult {
  uniqueBridgeUsers: number;
  totalTransactionsWithoutIOTX_E: number;
  totalIOTX_ETransactions: number;
  totalAssetsBridged: number;
  totalBridgeApprovals: number;
}
