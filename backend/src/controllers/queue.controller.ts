import { HTTP_OK, HTTP_SERVER_ERROR } from "../constants";
import { Queue } from "../services/queue.service";
import { NextFunction, Request, Response } from "express";

const queue = new Queue();

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
    const { action } = req.body as { action: string };
    const newQueue = queue.addToQueue(action);
    return res.status(HTTP_OK).json(newQueue);
  } catch (error: any) {
    next(error);
  }
}

export async function takeFromQueue(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const action = queue.takeFromQueue();
    return res.status(HTTP_OK).json({ action });
  } catch (error: any) {
    next(error);
  }
}
