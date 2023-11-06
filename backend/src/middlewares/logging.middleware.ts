import { NextFunction, Request, Response } from "express";

export default function logging(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const start = Date.now();
  const { method, url } = req;
  res.on("finish", () => {
    const responseTime = Date.now() - start;
    const { statusCode } = res;
    console.log(`[${method}] ${url} - ${statusCode} (${responseTime}ms)`);
  });
  next();
}
