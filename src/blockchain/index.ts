import { IotexBlockchainController } from "./IotexBlockchainController";
import { DataController } from "./DataController";
import { EthereumBlockchainController } from "./EthereumBlockchainController";
import { BinanceBlockchainController } from "./BinanceBlockchainController";
import { PolygonBlockchainController } from "./PolygonBlockchainController";

/*
export const main = async () => {
  const ibc2e = new IotexBlockchainController("iotx2ethereum");
  const ibc2b = new IotexBlockchainController("iotx2binance");
  const ibc2p = new IotexBlockchainController("iotx2polygon");
  const ebc = new EthereumBlockchainController();
  const bbc = new BinanceBlockchainController();
  const pbc = new PolygonBlockchainController();
  const dc = new DataController(ibc2e, ibc2b, ibc2p, ebc, bbc, pbc);
  console.log(
    `The Main Script found ${await dc.getUniqueBridgeUsers()} unique bridge users`
  );
};

main();
*/

export default {
  IotexBlockchainController,
};
