import express from "express";
import cors from "cors";
import queueRoute from "./routes/queue.route.js";
import actionsRoute from "./routes/actions.route.js";
import error from "./middlewares/error.middleware.js";
import logging from "./middlewares/logging.middleware.js";

const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  return console.log(`Server listening on port ${PORT}`);
});
