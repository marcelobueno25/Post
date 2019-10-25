import req from "supertest";
import express from "express";
const server = express();

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.text).toBe("Hello ts-node!");
});