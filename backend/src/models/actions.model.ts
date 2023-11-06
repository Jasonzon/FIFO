import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND } from "../constants";
import HttpError from "../exceptions/http.exception";
import { TAction } from "../models/action.model";
import calculateCredits from "../utils/calculateCredits";

export class Actions {
  private actions: TAction[] = [];

  constructor(baseActions: TAction[]) {
    this.actions = baseActions;
  }

  public exists(action: string): boolean {
    for (const act of this.actions) {
      if (act.type === action) {
        return true;
      }
    }
    return false;
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

  public hasCredits(action: string): boolean {
    for (const act of this.actions) {
      if (act.type === action) {
        return act.credits > 0;
      }
    }
    return false;
  }
}
