import { createTask } from "../adapters/createTask";
import { format as formatCreateTask } from "./presenters/createTask";

const createTaskEndpoint = (req: any, res: any) => {
  const task = createTask();

  const body = formatCreateTask(task);

  res.statusCode = 200;
  res.end(body);
};

export { createTaskEndpoint as createTask };
