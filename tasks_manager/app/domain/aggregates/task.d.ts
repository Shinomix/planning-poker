import { Vote } from "../entities/vote";
import { User } from "../entities/user";
import { TaskIdentifier } from "../entities/taskIdentifier";

interface Task {
  readonly id: TaskIdentifier;
  votes: Array<Vote>;
  users: Array<User>;
}

export { Task };
