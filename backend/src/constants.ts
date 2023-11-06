import { TAction } from "./models/action.model.js";

export const HTTP_OK = 200;
export const HTTP_NOT_FOUND = 404;
export const HTTP_FORBIDDEN = 403;
export const HTTP_SERVER_ERROR = 500;
export const HTTP_BAD_REQUEST = 400;

export const EXECUTION_INTERVAL = 2 * 60 * 1000; //2min
export const CALCUL_INTERVAL = 24 * 60 * 60 * 1000; //24h

export const MIN_PERCENTAGE = 0.8; //80%
export const MAX_PERCENTAGE = 1; //100%

export const baseActions: TAction[] = [
  {
    type: "A",
    maxCredits: 30,
    credits: 0,
  },
  {
    type: "B",
    maxCredits: 40,
    credits: 0,
  },
  {
    type: "C",
    maxCredits: 50,
    credits: 0,
  },
];
