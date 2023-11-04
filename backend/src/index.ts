import express from "express";
import cors from "cors";
import queueRoute from "./routes/queue.route.js";
import error from "./middlewares/error.middleware.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/queue", queueRoute);

app.use(error);

app.listen(PORT, () => {
  return console.log(`Server listening on port ${PORT}`);
});
