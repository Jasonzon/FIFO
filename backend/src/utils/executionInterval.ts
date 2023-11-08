import { EXECUTION_INTERVAL } from "../constants";
import { ExecutionTime } from "../models/execution-time.model";
import { Queue } from "../models/queue.model";

function callback(queue: Queue, time: ExecutionTime) {
  queue.execute();
  time.setTime(Date.now());
}

export default function startExecutionInterval(
  queue: Queue,
  time: ExecutionTime
): NodeJS.Timer {
  console.log("2min execution interval started");
  return setInterval(() => callback(queue, time), EXECUTION_INTERVAL);
}
