import { HTTP_BAD_REQUEST, HTTP_NOT_FOUND } from "../constants.js";
import HttpError from "../exceptions/error.exception.js";
import { TAction } from "../models/action.model.js";

export class Actions {
  private actions: TAction[] = [];

  public addAction(action: TAction): TAction[] {
    this.actions.push(action);
    return this.actions;
  }

  public getActions(): TAction[] {
    return this.actions;
  }

  /*
  public actionExists(newAction: TAction): boolean {
    return this.actions.some(({ type }) => newAction.type === type);
  }
  */

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
      act.type === action ? { type: act.type, credits: act.credits - 1 } : act
    );
  }
}
