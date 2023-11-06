import express from "express";
import cors from "cors";
import queueRoute from "./routes/queue.route";
import actionsRoute from "./routes/actions.route";
import error from "./middlewares/error.middleware";
import logging from "./middlewares/logging.middleware";

const app = express();

app.use(cors());
app.use(express.json());

//Logging middleware
app.use(logging);

//Router
app.use("/queue", queueRoute);
app.use("/actions", actionsRoute);

//Error middleware
app.use(error);

export default app;
