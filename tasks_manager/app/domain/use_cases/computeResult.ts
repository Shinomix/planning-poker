import { Task } from "../aggregates/task";
import { VoteValue } from "../entities/voteValue";
import { Vote } from "../entities/vote";
import { TaskResult } from "../entities/taskResult";
import { TaskNotFound } from "./errors";

const computeResult = (taskId: string, find: Function): TaskResult => {
  const task: Task | undefined = find(taskId);
  if (!task) {
    throw new TaskNotFound();
  }

  const voteValues: Array<VoteValue> = task.votes.map(
    (vote: Vote) => vote.value
  );
  const results: TaskResult = new Map();

  voteValues.forEach((value: VoteValue) => {
    const currentValue: number | undefined = results.get(value);

    results.set(value, currentValue ? currentValue + 1 : 1);
  });

  return results;
};

export { computeResult };
