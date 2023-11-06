import { HTTP_BAD_REQUEST } from "../constants";
import HttpError from "../exceptions/http.exception";
import { actions } from "../controllers/actions.controller";

export class Queue {
  private queue: string[] = [];

  public addToQueue(action: string): string[] {
    if (!actions.exists(action)) {
      throw new HttpError("This action doesnt exist", HTTP_BAD_REQUEST);
    }
    this.queue.push(action);
    return this.queue;
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

  public execute(): string | undefined {
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
    return actionTaken;
  }
}
