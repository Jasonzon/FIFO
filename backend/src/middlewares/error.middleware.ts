import { NextFunction, Request, Response } from "express";
import HttpError from "../exceptions/http.exception";
import { HTTP_SERVER_ERROR } from "../constants";

export default function error(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.message);
  res.status(err.status || HTTP_SERVER_ERROR).json({ message: err.message });
}
