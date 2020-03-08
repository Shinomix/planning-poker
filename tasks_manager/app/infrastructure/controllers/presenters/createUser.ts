import { Task } from "../../../domain/aggregates/task";

const format = (task: Task): string => {
  return JSON.stringify({
    user: task.users[task.users.length - 1]
  });
};

export { format };
