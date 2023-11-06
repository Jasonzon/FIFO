import supertest from "supertest";
import app from "../../src/app";
import { actions } from "../../src/controllers/actions.controller";
import { HTTP_OK } from "../../src/constants";

describe("Actions Controller", () => {
  it("should return actions", async () => {
    const response = await supertest(app).get("/actions");
    expect(response.status).toBe(HTTP_OK);
    expect(response.body).toEqual(actions.getActions());
  });
});
