import express from "express";
import { getActions } from "../controllers/actions.controller.js";

const router = express.Router();

router.get("/", getActions);

export default router;
