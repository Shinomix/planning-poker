import { createTask } from "../aggregates/createTask";
import { TaskIdentifier } from "../entities/taskIdentifier";

const createTaskFn = (persistFn: any) => {
  const taskId: TaskIdentifier = {
    id: Math.round(Math.random() * 10_000).toString()
  };

  return createTask(taskId, persistFn);
};

export { createTaskFn as createTask };
