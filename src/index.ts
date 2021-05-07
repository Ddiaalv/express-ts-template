// index.ts
import express, { Request, Response, Application } from "express";

const app: Application = express();
const PORT = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
