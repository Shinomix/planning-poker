import { Task } from "../aggregates/task";
import { User } from "../entities/user";

const createUser = (task: Task, commit: Function): Task => {
  const user: User = { id: Math.round(Math.random() * 10_000).toString() };

  task.users.push(user);
  commit(task);

  return task;
};

export { createUser };
