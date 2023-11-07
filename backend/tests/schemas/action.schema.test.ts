import { actionSchema } from "../../src/schemas/action.schema";

describe("Action Schema", () => {
  it("should validate valid data", () => {
    const validData = {
      action: "A",
    };
    const validationResult = actionSchema.safeParse(validData);
    expect(validationResult.success).toBe(true);
  });

  it("should invalidate invalid data", () => {
    const invalidData = {
      action: 1,
    };
    const validationResult = actionSchema.safeParse(invalidData);
    expect(validationResult.success).toBe(false);
  });
});
