import fetch from "node-fetch";
import { main } from "../blockchain/index";

Parse.Cloud.define("hello", () => "Hello, World!");

Parse.Cloud.define("getTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const parsedResponse = await response.json();
  return parsedResponse;
});

Parse.Cloud.define("getUniqueBridgeUsers", async () => {
  return await main();
});
