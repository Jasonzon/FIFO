import express from "express";
import { getQueue, addToQueue } from "../controllers/queue.controller";
import { getExecutionTime } from "../controllers/execution-time.controller";

const router = express.Router();

router.get("/", getQueue);

router.get("/time", getExecutionTime);

router.post("/", addToQueue);

export default router;
