import { Task } from "../aggregates/task";
import { User } from "../entities/user";
import { Vote } from "../entities/vote";
import { VoteValue } from "../entities/voteValue";
import { TaskNotFound, UserNotFound } from "./errors";

const vote = (
  taskId: string,
  userId: string,
  value: VoteValue,
  commit: Function,
  find: Function
): Task => {
  const task: Task | undefined = find(taskId);
  if (!task) {
    throw new TaskNotFound();
  }

  const user: User | undefined = task.users.find(
    (user: User) => user.id === userId
  );
  if (!user) {
    throw new UserNotFound();
  }

  const existingVote: Vote | undefined = task.votes.find(
    (vote: Vote) => vote.user === user
  );

  if (!existingVote) {
    const vote: Vote = { user, value };

    task.votes.push(vote);
  } else {
    existingVote.value = value;
  }

  commit(task);

  return task;
};

export { vote };
