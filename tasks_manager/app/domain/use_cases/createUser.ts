import { Task } from "../aggregates/task";
import { User } from "../entities/user";
import { TaskNotFound } from "./errors";

const createUser = (taskId: string, commit: Function, find: Function): Task => {
  const task: Task = find(taskId);
  if (!task) {
    throw new TaskNotFound();
  }

  const user: User = { id: Math.round(Math.random() * 10_000).toString() };

  task.users.push(user);
  commit(task);

  return task;
};

export { createUser };
