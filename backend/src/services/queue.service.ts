import { HTTP_BAD_REQUEST } from "../constants";
import HttpError from "../exceptions/error.exception";

export class Queue {
  private queue: string[] = [];

  public addToQueue(action: string): string[] {
    this.queue.push(action);
    return this.queue;
  }

  public getQueue(): string[] {
    return this.queue;
  }

  public takeFromQueue(): string {
    if (this.queue.length === 0) {
      throw new HttpError("No actions in queue", HTTP_BAD_REQUEST);
    }
    return this.queue.shift() as string;
  }
}
