import express from "express";
import { removeCredits } from "../controllers/actions.controller";

const router = express.Router();

router.put("/:action", removeCredits);

export default router;
