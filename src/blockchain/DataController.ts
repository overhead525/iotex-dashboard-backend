import { BinanceBlockchainController } from "./BinanceBlockchainController";
import { EthereumBlockchainController } from "./EthereumBlockchainController";
import { IotexBlockchainController } from "./IotexBlockchainController";
import { PolygonBlockchainController } from "./PolygonBlockchainController";

export class DataController {
  private ibc: IotexBlockchainController;
  private ebc: EthereumBlockchainController;
  private bbc: BinanceBlockchainController;
  private pbc: PolygonBlockchainController;

  constructor(
    ibc: IotexBlockchainController,
    ebc: EthereumBlockchainController,
    bbc: BinanceBlockchainController,
    pbc: PolygonBlockchainController
  ) {
    this.ibc = ibc;
    this.ebc = ebc;
    this.bbc = bbc;
    this.pbc = pbc;
  }

  public async getUniqueBridgeUsers(/* start_date: Date, end_date: Date, currency: string */) {
    // IOTX out Token Cashiers...
    const blockchains = Object.keys(this.ibc.contractsObj).slice(0, 3);
    const results: number[] = [];
    for await (const chain of blockchains) {
      results.push(await this.ibc.getNumUniqueBridgeUsers(chain));
    }
    // Ethereum to IOTX Token Cashier
    results.push(await this.ebc.getNumUniqueBridgeUsers());
    // Binance to IOTX Token Cashier
    results.push(await this.bbc.getNumUniqueBridgeUsers());
    // Polygon to IOTX Token Cashier
    results.push(await this.pbc.getNumUniqueBridgeUsers());
    return results.reduce((a, b) => a + b, 0);
  }

  public async getTotalTransactionsWithoutLegacyIOTX() {
    return null;
  }
}
