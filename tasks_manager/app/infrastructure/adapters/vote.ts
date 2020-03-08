import { vote } from "../../domain/use_cases/vote";
import { find, push } from "../repositories/taskRepository";
import { VoteValue } from "../../domain/entities/voteValue";

const voteFn = (value: VoteValue, userId: string, taskId: string) => {
  return vote(taskId, userId, value, push, find);
};

export { voteFn as vote };
