import { EXECUTION_INTERVAL } from "../constants.js";
import { Queue } from "../models/queue.model.js";

export default function startExecutionInterval(queue: Queue): NodeJS.Timer {
  console.log("2min execution interval started");
  queue.execute();
  return setInterval(() => queue.execute(), EXECUTION_INTERVAL);
}
