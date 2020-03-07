import { createTask } from "../aggregates/createTask";
import { TaskIdentifier } from "../entities/taskIdentifier";

const createTaskFn = (commit: Function) => {
  const taskId: TaskIdentifier = {
    id: Math.round(Math.random() * 10_000).toString()
  };

  const task = createTask(taskId);

  commit(task)

  return task
};

export { createTaskFn as createTask };
