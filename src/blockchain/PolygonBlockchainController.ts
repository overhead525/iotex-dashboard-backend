import { BaseBlockchainController } from "./BaseBlockchainController";

export class PolygonBlockchainController extends BaseBlockchainController {
  constructor() {
    super(
      "../../polygonscan.config.json",
      "https://api.polygonscan.com",
      "polygon2iotx"
    );
  }
}

const main = async () => {
  const pbc = new PolygonBlockchainController();
  const result = await pbc.getNumUniqueBridgeUsers();
  console.log(result);
};

main();
