import { HTTP_OK, baseActions } from "../constants.js";
import { Actions } from "../models/actions.model.js";
import { NextFunction, Request, Response } from "express";
import startCalculInterval from "../utils/interval.js";

export const actions = new Actions(baseActions);
startCalculInterval(actions);

export async function getActions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newActions = actions.getActions();
    return res.status(HTTP_OK).json(newActions);
  } catch (error: any) {
    next(error);
  }
}
