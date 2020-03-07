import { createTask } from '../adapters/createTask'
import { format as createTaskFormat } from './presenters/createTask'

const createTaskEndpoint = (req: any, res: any) => {
  const task = createTask();

  const body = JSON.stringify(createTaskFormat(task))

  res.statusCode = 200;
  res.end(body);
};

const voteEndpoint = (req: any, res: any) => {
  res.statusCode = 200;
  res.end();
};

const createUserEndpoint = (req: any, res: any) => {
  res.statusCode = 200;
  res.end();
};

export { createTaskEndpoint as createTask, voteEndpoint as vote, createUserEndpoint as createUser };
