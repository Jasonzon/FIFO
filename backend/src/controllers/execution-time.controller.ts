import { NextFunction, Request, Response } from "express";
import { HTTP_OK } from "../constants";
import { ExecTime } from "./queue.controller";

export async function getExecutionTime(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const time = ExecTime.getTime();
    return res.status(HTTP_OK).json({ time });
  } catch (error: any) {
    next(error);
  }
}
