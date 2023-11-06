import { Actions } from "../../src/models/actions.model";
import HttpError from "../../src/exceptions/http.exception";

describe("Actions Model", () => {
  let actions: Actions;
  const arrayOfActions = [
    { type: "A", credits: 3, maxCredits: 5 },
    { type: "B", credits: 0, maxCredits: 5 },
  ];

  beforeEach(() => {
    actions = new Actions(arrayOfActions);
  });

  it("should get all the actions", () => {
    expect(actions.getActions()).toEqual(arrayOfActions);
  });

  it("should check if action exists", () => {
    expect(actions.exists("A")).toBe(true);
    expect(actions.exists("C")).toBe(false);
  });

  it("should remove credit from action", () => {
    actions.removeCredit("A");
    expect(actions.getActions()[0].credits).toBe(2);
  });

  it("should handle removing credit from non-existent action", () => {
    expect(() => actions.removeCredit("C")).toThrow(HttpError);
    expect(() => actions.removeCredit("C")).toThrow("This action doesnt exist");
  });

  it("should handle removing credit from action with no credits", () => {
    expect(() => actions.removeCredit("B")).toThrow(HttpError);
    expect(() => actions.removeCredit("B")).toThrow(
      "This actions has no more credits"
    );
  });

  it("should calculate credits", () => {
    actions.calculate();
    const updatedActions = actions.getActions();
    expect([4, 5]).toContain(updatedActions[0].credits);
  });

  it("should check if action has credits", () => {
    expect(actions.hasCredits("A")).toBe(true);
    expect(actions.hasCredits("B")).toBe(false);
  });
});
