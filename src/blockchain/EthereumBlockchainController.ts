import { BaseBlockchainController } from "./BaseBlockchainController";

export class EthereumBlockchainController extends BaseBlockchainController {
  constructor() {
    super(
      "../../etherscan.config.json",
      "https://api.etherscan.io",
      "ethereum2iotx"
    );
  }
}

const main = async () => {
  const ebc = new EthereumBlockchainController();
  console.log(await ebc.getNumUniqueBridgeUsers());
};

main();
