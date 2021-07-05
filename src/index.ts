import express from "express";
import fs from "fs";
import path from "path";
import gql from "graphql-tag";
// @ts-ignore
import { default as ParseServer, ParseGraphQLServer } from "parse-server";
import {
  fetchParseConfigFromFile,
  ParseConfigData,
  ParseGraphQLConfigData,
} from "./util";
// @ts-ignore
import ParseDashboard from "parse-dashboard";

// CONSTANTS
const app = express();
const port = 8080;
const frontendDir = "dist/frontend/build";
const customSchema = fs.readFileSync(
  path.resolve(__dirname, "./cloud/schema.graphql")
);
const parseConfig = <ParseConfigData>(
  fetchParseConfigFromFile("parse.config.json")
);
const parseGraphQLConfig = <ParseGraphQLConfigData>(
  fetchParseConfigFromFile("parse-graphql.config.json")
);
const parseMountPath = "/parse";
const parseServer = new ParseServer({
  ...parseConfig,
  databaseURI: process.env.DATABASE_URI || parseConfig.databaseURI,
} as ParseConfigData);

const parseGraphQLServer = new ParseGraphQLServer(parseServer, {
  ...parseGraphQLConfig,
  graphQLCustomTypeDefs: gql`
    ${customSchema}
  `,
});

const parseDashboard = new ParseDashboard({
  apps: [parseConfig],
});

// ROUTES
app.use(parseMountPath, parseServer.app);
parseGraphQLServer.applyGraphQL(app);
parseGraphQLServer.applyPlayground(app);

app.use("/dashboard", parseDashboard);

app.use(express.static(frontendDir));

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(`${frontendDir}/index.html`);
});

// SERVE
app.listen(port, () => {
  console.log(`Iotex Dashboard App listening at http://localhost:${port}`);
  console.log("REST API running on http://localhost:8080/parse");
  console.log("GraphQL API running on http://localhost:8080/graphql");
  console.log("GraphQL Playground running on http://localhost:8080/playground");
  console.log("Parse Dashboard running on http://localhost:8080/dashboard");
});
