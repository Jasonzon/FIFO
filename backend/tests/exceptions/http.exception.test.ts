import HttpError from "../../src/exceptions/http.exception";

describe("HttpError Class", () => {
  it("should create an instance of HttpError", () => {
    const httpError = new HttpError("Test Error Message", 404);
    expect(httpError instanceof HttpError).toBe(true);
    expect(httpError.message).toBe("Test Error Message");
    expect(httpError.status).toBe(404);
    expect(httpError.name).toBe("HttpError");
  });
});
