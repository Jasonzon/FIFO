import { HTTP_BAD_REQUEST, HTTP_OK } from "../constants";
import { Queue } from "../models/queue.model";
import { NextFunction, Request, Response } from "express";
import startExecutionInterval from "../utils/executionInterval";
import { actionSchema } from "../schemas/action.schema";
import HttpError from "../exceptions/http.exception";

const queue = new Queue();
startExecutionInterval(queue);

export async function getQueue(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newQueue = queue.getQueue();
    return res.status(HTTP_OK).json(newQueue);
  } catch (error: any) {
    next(error);
  }
}

export async function addToQueue(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const parsedAction = actionSchema.safeParse(req.params);
    if (!parsedAction.success) {
      throw new HttpError("Invalid data", HTTP_BAD_REQUEST);
    }
    const { action } = parsedAction.data;
    const newQueue = queue.addToQueue(action);
    return res.status(HTTP_OK).json(newQueue);
  } catch (error: any) {
    next(error);
  }
}
