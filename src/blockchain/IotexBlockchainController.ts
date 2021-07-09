import { BaseBlockchainController } from "./BaseBlockchainController";
import {
  fetchTransactionsByAddressGraphQL,
  filterNumUniqueContractUsersGraphQL,
} from "./shared";

export class IotexBlockchainController extends BaseBlockchainController {
  constructor(bridgeString: string) {
    super(
      "../../mainnet.config.json",
      "https://analytics.iotexscan.io",
      bridgeString
    );
  }

  public async getNumUniqueBridgeUsers(): Promise<number> {
    const transactions = await fetchTransactionsByAddressGraphQL(
      this.contractsObject[this.bridgeString].tokenCashier,
      this.apiConnection
    );
    return filterNumUniqueContractUsersGraphQL(transactions);
  }
}

/*
const main = async () => {
  const ibc2e = new IotexBlockchainController("iotx2ethereum");
  const ibc2b = new IotexBlockchainController("iotx2binance");
  const ibc2p = new IotexBlockchainController("iotx2polygon");
  const result = await ibc2e.getNumUniqueBridgeUsers();
  const result2 = await ibc2b.getNumUniqueBridgeUsers();
  const result3 = await ibc2p.getNumUniqueBridgeUsers();
  console.log(`Result is ${result}, ${result2}, ${result3}`);
};

main();
*/
