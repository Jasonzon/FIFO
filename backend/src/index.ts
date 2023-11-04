import express from "express";
import cors from "cors";
import queueRoute from "./routes/queue.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/queue", queueRoute);

app.listen(PORT, () => {
  return console.log(`Server listening on port ${PORT}`);
});
