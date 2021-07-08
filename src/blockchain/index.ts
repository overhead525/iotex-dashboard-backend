import { IotexBlockchainController } from "./IotexBlockchainController";
import { DataController } from "./DataController";
import { EthereumBlockchainController } from "./EthereumBlockchainController";
import { BinanceBlockchainController } from "./BinanceBlockchainController";
import { PolygonBlockchainController } from "./PolygonBlockchainController";

export const main = async () => {
  const ibc = new IotexBlockchainController();
  const ebc = new EthereumBlockchainController();
  const bbc = new BinanceBlockchainController();
  const pbc = new PolygonBlockchainController();
  const dc = new DataController(ibc, ebc, bbc, pbc);
  console.log(await dc.getUniqueBridgeUsers());
};

main();

export default {
  IotexBlockchainController,
};
