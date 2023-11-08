import { HTTP_OK, baseActions } from "../constants";
import { Actions } from "../models/actions.model";
import { NextFunction, Request, Response } from "express";
import startCalculInterval from "../utils/calculationInterval";
import { CalculationTime } from "../models/calculation-time.model";

export const actions = new Actions(baseActions);
export const CalculTime = new CalculationTime();
startCalculInterval(actions, CalculTime);

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
