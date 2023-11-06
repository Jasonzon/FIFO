import { HTTP_BAD_REQUEST } from "../constants.js";
import HttpError from "../exceptions/http.exception.js";
import { actions } from "../controllers/actions.controller.js";

export class Queue {
  private queue: string[] = [];

  public addToQueue(action: string): void {
    this.queue.push(action);
  }

  public getQueue(): string[] {
    return this.queue;
  }

  private takeFromQueue(): string {
    if (this.queue.length === 0) {
      throw new HttpError("No actions in queue", HTTP_BAD_REQUEST);
    }
    return this.queue.shift() as string;
  }

  public execute(): void {
    console.log("Executing...");
    if (this.queue.length === 0) {
      console.log("No actions in queue");
      return;
    }
    const nextAction = this.queue[0];
    if (!actions.hasCredits(nextAction)) {
      console.log("Not enough credits for action", nextAction);
      return;
    }
    const actionTaken = this.takeFromQueue();
    console.log(actionTaken, "executed");
    actions.removeCredit(actionTaken);
  }
}
