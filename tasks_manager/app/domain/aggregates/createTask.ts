import { Task } from "./task";
import { TaskIdentifier } from "../entities/taskIdentifier";

const createTask = (id: TaskIdentifier, persistFn: any): Task => {
  return {
    id,
    votes: [],
    users: [],
    persist: persistFn
  };
};

export { createTask };
