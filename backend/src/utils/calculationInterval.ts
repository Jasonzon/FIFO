import { CALCUL_INTERVAL } from "../constants";
import { Actions } from "../models/actions.model";
import { CalculationTime } from "../models/calculation-time.model";

function callback(actions: Actions, time: CalculationTime) {
  actions.calculate();
  time.setTime(Date.now());
}

export default function startCalculInterval(
  actions: Actions,
  time: CalculationTime
) {
  actions.calculate();
  console.log("24h calcul interval started");
  return setInterval(() => callback(actions, time), CALCUL_INTERVAL);
}
