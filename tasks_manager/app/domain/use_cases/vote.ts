import { Task } from "../aggregates/task";
import { User } from "../entities/user";
import { Vote } from "../entities/vote";
import { VoteValue } from "../entities/voteValue";

const vote = (task: Task, user: User, value: VoteValue): Task => {
  const existingVote: Vote | undefined = task.votes.find(
    (vote: Vote) => vote.user === user
  );

  if (!existingVote) {
    const vote: Vote = { user, value };

    task.votes.push(vote);
  } else {
    existingVote.value = value;
  }

  task.persist();

  return task;
};

export { vote };
