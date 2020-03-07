import { Task } from "../../domain/aggregates/task";

interface Store {
  [key: string]: Task;
}
let store: Store = {};

const has = (task: Task): boolean => {
  return !!store[task.id.id];
};

const push = (task: Task): Task => {
  store[task.id.id] = task;

  return store[task.id.id];
};

// for testing purpose we need to clear the store at each spec
const clear = (): void => {
  store = {};
};

export { has, push, clear };
