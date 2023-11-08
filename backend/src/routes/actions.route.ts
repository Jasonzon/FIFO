import express from "express";
import { getActions } from "../controllers/actions.controller";
import { getCalculationTime } from "../controllers/calculation-time.controller";

const router = express.Router();

router.get("/", getActions);

router.get("/time", getCalculationTime);

export default router;
