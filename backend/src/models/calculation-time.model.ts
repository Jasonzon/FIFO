import { CALCUL_INTERVAL } from "../constants";

export class CalculationTime {
  private lastCalculation: number = Date.now();

  public setTime(time: number): void {
    this.lastCalculation = time;
  }

  public getTime(): number {
    const timeUntilNext = CALCUL_INTERVAL - (Date.now() - this.lastCalculation);
    return timeUntilNext / 1000;
  }
}
