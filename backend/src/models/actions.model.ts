import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND } from "../constants.js";
import HttpError from "../exceptions/http.exception.js";
import { TAction } from "../models/action.model.js";
import calculateCredits from "../utils/calculate.js";

export class Actions {
  private actions: TAction[] = [];

  constructor(baseActions: TAction[]) {
    this.actions = baseActions;
  }

  public getActions(): TAction[] {
    return this.actions;
  }

  public removeCredit(action: string): void {
    const actionToRemoveCredits = this.actions.find(
      (act) => act.type === action
    );
    if (!actionToRemoveCredits) {
      throw new HttpError("This action doesnt exists", HTTP_NOT_FOUND);
    }
    if (actionToRemoveCredits.credits <= 0) {
      throw new HttpError("This actions has no more credits", HTTP_BAD_REQUEST);
    }
    this.actions = this.actions.map((act) =>
      act.type === action ? { ...act, credits: act.credits - 1 } : act
    );
  }

  public calculate(): void {
    this.actions = calculateCredits(this.actions);
  }
}
