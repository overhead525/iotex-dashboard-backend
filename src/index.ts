import express from "express";

const app = express();
const port = 8080;
const frontendDir = "dist/frontend/build";

app.use(express.static(frontendDir));

app.get("/", (req: express.Request, res: express.Response) => {
  res.sendFile(`${frontendDir}/index.html`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
