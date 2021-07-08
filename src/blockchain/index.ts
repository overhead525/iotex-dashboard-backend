import { IotexBlockchainController } from "./IotexBlockchainController";
import { DataController } from "./DataController";
import { EthereumBlockchainController } from "./EthereumBlockchainController";

export const main = async () => {
  const ibc = new IotexBlockchainController();
  const ebc = new EthereumBlockchainController();
  const dc = new DataController(ibc, ebc);
  console.log(await dc.getUniqueBridgeUsers());
};

export default {
  IotexBlockchainController,
};
