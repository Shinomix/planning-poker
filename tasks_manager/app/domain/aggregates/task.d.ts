import { Vote } from "../entities/vote";
import { TaskIdentifier } from "../entities/taskIdentifier";

interface Task {
  readonly id: TaskIdentifier;
  votes: Array<Vote>;
}

export { Task };
