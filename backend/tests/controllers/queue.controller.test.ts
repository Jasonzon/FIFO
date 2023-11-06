import supertest from "supertest";
import app from "../../src/app";
import { HTTP_OK } from "../../src/constants";

describe("Queue Controller", () => {
  it("should return queue", async () => {
    const response = await supertest(app).get("/queue");
    expect(response.status).toBe(HTTP_OK);
    expect(response.body).toEqual([]);
  });

  it("should add an action to the queue", async () => {
    const response = await supertest(app).put("/queue/A");
    expect(response.status).toBe(HTTP_OK);
    expect(response.body).toEqual(["A"]);
  });
});
