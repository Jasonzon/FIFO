import { CALCUL_INTERVAL } from "../constants";
import { Actions } from "../models/actions.model";

export default function startCalculInterval(actions: Actions) {
  actions.calculate();
  console.log("24h calcul interval started");
  return setInterval(() => actions.calculate(), CALCUL_INTERVAL);
}
