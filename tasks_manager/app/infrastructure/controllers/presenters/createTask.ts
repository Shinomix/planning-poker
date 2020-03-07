import { Task } from "../../../domain/aggregates/task";

const format = (task: Task): string => {
  return JSON.stringify({ id: task.id.id });
};

export { format };
