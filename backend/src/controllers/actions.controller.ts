import { HTTP_OK } from "../constants";
import { Actions } from "../services/actions.service";
import { NextFunction, Request, Response } from "express";

const actions = new Actions();

export async function getActions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    return res.status(HTTP_OK).json(actions.getActions());
  } catch (error: any) {
    next(error);
  }
}

export async function removeCredits(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { action } = req.params as { action: string };
    actions.removeCredit(action);
    return res.status(HTTP_OK).json({ message: "Credit successfully removed" });
  } catch (error: any) {
    next(error);
  }
}
