import { HTTP_OK } from "../constants";
import { Queue } from "../models/queue.model";
import { NextFunction, Request, Response } from "express";
import startExecutionInterval from "../utils/executionInterval";

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
    const { action } = req.params as { action: string };
    const newQueue = queue.addToQueue(action);
    return res.status(HTTP_OK).json(newQueue);
  } catch (error: any) {
    next(error);
  }
}
