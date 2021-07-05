import fetch from "node-fetch";

Parse.Cloud.define("hello", () => "Hello, World!");

Parse.Cloud.define("getTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const parsedResponse = await response.json();
  return parsedResponse;
});
