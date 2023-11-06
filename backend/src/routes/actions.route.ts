import express from "express";
import { getActions } from "../controllers/actions.controller";

const router = express.Router();

router.get("/", getActions);

export default router;
