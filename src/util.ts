import path from "path";
import fs from "fs";

export interface ParseConfigData {
  appID: string;
  masterKey: string;
  appName: string;
  cloud: string;
  databaseURI: string;
}

export interface ParseGraphQLConfigData {
  graphQLPath: string;
  playgroundPath: string;
}

export const fetchParseConfigFromFile = <T>(filePath: string): T => {
  const pathToFile = path.join(__dirname, filePath);
  const rawData = fs.readFileSync(filePath).toString();
  return JSON.parse(rawData) as T;
};
