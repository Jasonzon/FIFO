import { TAction } from "../models/action.model";
import { MIN_PERCENTAGE, MAX_PERCENTAGE } from "../constants";

export default function calculateCredits(actions: TAction[]): TAction[] {
  console.log("Starting calculation");
  return actions.map((action) => ({
    ...action,
    credits: Math.floor(
      action.maxCredits *
        (Math.random() * (MAX_PERCENTAGE - MIN_PERCENTAGE) + MIN_PERCENTAGE)
    ),
  }));
}
