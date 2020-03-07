import { createTask } from "../aggregates/createTask";
import { TaskIdentifier } from "../entities/taskIdentifier";

const createTaskFn = () => {
  const taskId: TaskIdentifier = {
    id: Math.round(Math.random() * 10_000).toString()
  };

  return createTask(taskId);
};

export { createTaskFn as createTask };
