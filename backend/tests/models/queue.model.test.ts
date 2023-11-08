import { Queue } from "../../src/models/queue.model";
import HttpError from "../../src/exceptions/http.exception";
import { Actions } from "../../src/models/actions.model";

describe("Queue Model", () => {
  let queue: Queue;
  let emptyQueue: Queue;
  let actions: Actions;

  beforeEach(() => {
    actions = new Actions([
      { type: "A", credits: 3, maxCredits: 5 },
      { type: "B", credits: 0, maxCredits: 5 },
    ]);
    queue = new Queue(actions);
    queue.addToQueue(actions.getActions()[0].type);
    queue.addToQueue(actions.getActions()[1].type);
    emptyQueue = new Queue(new Actions([]));
  });

  it("should add action to the queue", () => {
    const result = queue.addToQueue("A");
    expect(result).toEqual(["A", "B", "A"]);
  });

  it("should handle adding non-existent action to the queue", () => {
    expect(() => queue.addToQueue("E")).toThrow(HttpError);
    expect(() => queue.addToQueue("E")).toThrow("This action doesnt exist");
  });

  it("should handle executing action from an empty queue", () => {
    const executeResult = emptyQueue.execute();
    expect(executeResult).toBeUndefined();
  });

  it("should execute action from the queue", () => {
    queue.addToQueue("A");
    const executeResult = queue.execute();
    expect(executeResult).toBe("A");
  });
});
