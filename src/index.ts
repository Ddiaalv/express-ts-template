import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use("/img", express.static(__dirname + "/public"));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
