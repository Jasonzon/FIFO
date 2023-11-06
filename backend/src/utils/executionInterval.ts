import { EXECUTION_INTERVAL } from "../constants";
import { Queue } from "../models/queue.model";

export default function startExecutionInterval(queue: Queue): NodeJS.Timer {
  console.log("2min execution interval started");
  return setInterval(() => queue.execute(), EXECUTION_INTERVAL);
}
