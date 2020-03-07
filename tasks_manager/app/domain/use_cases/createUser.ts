import { Task } from "../aggregates/task";
import { User } from "../entities/user";

const createUser = (task: Task): Task => {
  const user: User = { id: Math.round(Math.random() * 10_000).toString() };

  task.users.push(user);
  task.persist();

  return task;
};

export { createUser };
