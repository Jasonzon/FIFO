import express from "express";
import {
  getQueue,
  addToQueue,
  takeFromQueue,
} from "../controllers/queue.controller";

const router = express.Router();

router.get("/", getQueue);

router.put("/:action", addToQueue);

router.put("/", takeFromQueue);

export default router;
