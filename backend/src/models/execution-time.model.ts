import { EXECUTION_INTERVAL } from "../constants";

export class ExecutionTime {
  private lastExecution: number = Date.now();

  public setTime(time: number): void {
    this.lastExecution = time;
  }

  public getTime(): number {
    const timeUntilNext =
      EXECUTION_INTERVAL - (Date.now() - this.lastExecution);
    return timeUntilNext / 1000;
  }
}
