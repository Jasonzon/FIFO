import { NextFunction, Request, Response } from "express";
import { HTTP_OK } from "../constants";
import { CalculTime } from "./actions.controller";

export async function getCalculationTime(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const time = CalculTime.getTime();
    return res.status(HTTP_OK).json({ time });
  } catch (error: any) {
    next(error);
  }
}
