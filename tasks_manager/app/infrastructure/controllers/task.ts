import { createTask } from "../adapters/createTask";
import { vote } from "../adapters/vote";
import { createUser } from "../adapters/createUser";
import { format as formatCreateTask } from "./presenters/createTask";
import { format as formatVote } from "./presenters/vote";
import { format as formatCreateUser } from "./presenters/createUser";
import { format as formatError } from "./presenters/error";
import { VoteValue } from "../../domain/entities/voteValue";

const createTaskEndpoint = (req: any, res: any) => {
  const task = createTask();

  const body = formatCreateTask(task);

  res.statusCode = 200;
  res.end(body);
};

const voteEndpoint = (req: any, res: any) => {
  const value: VoteValue = req.body.value;
  const userId: string = req.body.user_id;
  const taskId: string = req.params.id;

  let body: string;
  try {
    const task = vote(value, userId, taskId);

    body = formatVote(task);
  } catch (e) {
    body = formatError(e);
  }

  res.statusCode = 200;
  res.end(body);
};

const createUserEndpoint = (req: any, res: any) => {
  const taskId: string = req.params.id;

  let body: string;
  try {
    const task = createUser(taskId);

    body = formatCreateUser(task);
  } catch (e) {
    body = formatError(e);
  }

  res.statusCode = 200;
  res.end(body);
};

export {
  createTaskEndpoint as createTask,
  voteEndpoint as vote,
  createUserEndpoint as createUser
};
