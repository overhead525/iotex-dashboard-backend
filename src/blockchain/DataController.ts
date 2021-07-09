import { BinanceBlockchainController } from "./BinanceBlockchainController";
import { EthereumBlockchainController } from "./EthereumBlockchainController";
import { IotexBlockchainController } from "./IotexBlockchainController";
import { PolygonBlockchainController } from "./PolygonBlockchainController";

export class DataController {
  private ibc2e: IotexBlockchainController;
  private ibc2b: IotexBlockchainController;
  private ibc2p: IotexBlockchainController;
  private ebc: EthereumBlockchainController;
  private bbc: BinanceBlockchainController;
  private pbc: PolygonBlockchainController;

  constructor(
    ibc2e: IotexBlockchainController,
    ibc2b: IotexBlockchainController,
    ibc2p: IotexBlockchainController,
    ebc: EthereumBlockchainController,
    bbc: BinanceBlockchainController,
    pbc: PolygonBlockchainController
  ) {
    this.ibc2e = ibc2e;
    this.ibc2b = ibc2b;
    this.ibc2p = ibc2p;
    this.ebc = ebc;
    this.bbc = bbc;
    this.pbc = pbc;
  }

  public async getUniqueBridgeUsers(start_date?: Date, end_date?: Date) {
    const results: number[] = [];
    // IOTX out Token Cashiers...
    results.push(await this.ibc2e.getNumUniqueBridgeUsers());
    results.push(await this.ibc2b.getNumUniqueBridgeUsers());
    results.push(await this.ibc2p.getNumUniqueBridgeUsers());
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
