import { Task } from "./task";
import { TaskIdentifier } from "../entities/taskIdentifier";

const createTask: Function = (id: TaskIdentifier): Task => {
  return {
    id,
    votes: []
  };
};

export { createTask };
