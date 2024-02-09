import express, { Express } from "express";
import { config } from "./config/configEnv";
import { todoRoute } from "./routes/todoRoutes";

const port: number = config?.PORT ? +config.PORT : 3000;
const env: string = config.NODE_ENV || "development";

const app: Express = express();
app.use(express.json());

app.use("/api/v1/todo", todoRoute);

app.listen(port, () => {
  console.log(`Env: ${env} => Server Listening on http://localhost:${port}`);
});
