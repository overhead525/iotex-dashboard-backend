import { BaseBlockchainController } from "./BaseBlockchainController";
import Parse from "parse/node";

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
  Parse.initialize(
    "iotex-dashboard-backend",
    "iotex-dashboard-backend-singapore-america"
  );
  Parse.serverURL = "http://localhost:8080/parse";
  const ebc = new EthereumBlockchainController();
  await ebc.scrapeAndGatherCashierTransactions();
};

main();
