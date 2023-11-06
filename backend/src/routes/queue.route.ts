import express from "express";
import { getQueue, addToQueue } from "../controllers/queue.controller.js";

const router = express.Router();

router.get("/", getQueue);

router.put("/:action", addToQueue);

export default router;
