import express from "express";
import { getQueue, addToQueue } from "../controllers/queue.controller";

const router = express.Router();

router.get("/", getQueue);

router.post("/", addToQueue);

export default router;
