import { vote } from "../../domain/use_cases/vote";
import { find, push } from "../repositories/taskRepository";
import { User } from "../../domain/entities/user";
import { VoteValue } from "../../domain/entities/voteValue";

const voteFn = (value: VoteValue, userId: string, taskId: string) => {
  const user: User = { id: userId };

  return vote(taskId, user, value, push, find);
};

export { voteFn as vote };
