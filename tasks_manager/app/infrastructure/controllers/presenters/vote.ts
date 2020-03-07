import { Task } from "../../../domain/aggregates/task";

const format = (task: Task): string => {
  return JSON.stringify({
    vote: task.votes[task.votes.length - 1]
  });
};

export { format };
