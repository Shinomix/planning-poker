import { Task } from "../aggregates/task";
import { VoteValue } from "../entities/voteValue";
import { Vote } from "../entities/vote";
import { TaskResult } from "../entities/taskResult";

const computeResult = (task: Task): TaskResult => {
  const voteValues: Array<VoteValue> = task.votes.map(
    (vote: Vote) => vote.value
  );
  const results: TaskResult = new Map();

  voteValues.forEach((value: VoteValue) => {
    let currentValue: number | undefined = results.get(value);

    results.set(value, !!currentValue ? currentValue + 1 : 1);
  });

  return results;
};

export { computeResult };
