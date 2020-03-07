import { Task } from "./task";
import { TaskIdentifier } from "../entities/taskIdentifier";

const createTask = (id: TaskIdentifier): Task => {
  return {
    id,
    votes: [],
    users: []
  };
};

export { createTask };
