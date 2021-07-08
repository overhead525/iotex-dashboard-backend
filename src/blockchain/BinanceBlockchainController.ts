import { BaseBlockchainController } from "./BaseBlockchainController";

export class BinanceBlockchainController extends BaseBlockchainController {
  constructor() {
    super(
      "../../bscscan.config.json",
      "https://api.bscscan.com",
      "binance2iotx"
    );
  }
}

const main = async () => {
  const bbc = new BinanceBlockchainController();
  const result = await bbc.getNumUniqueBridgeUsers();
  console.log(result);
};

main();
