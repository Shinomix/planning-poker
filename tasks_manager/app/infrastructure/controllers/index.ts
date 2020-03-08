const polka = require("polka");

import cors from "cors";
import { json } from "body-parser";

import { createTask, vote, createUser } from "./task";

const initHTTPcontrollers = () => {
  // polka has no official types
  // cast it to 'any' to prevent TS compiler to raise
  const server = (<any>polka)();

  server
    .use(json())
    .use(cors())
    .listen(3000);

  server
    .post("/tasks", createTask)
    .post("/tasks/:id/vote", vote)
    .post("/tasks/:id/user", createUser);
};

export { initHTTPcontrollers };
