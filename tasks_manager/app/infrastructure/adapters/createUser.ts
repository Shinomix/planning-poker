import { createUser } from "../../domain/use_cases/createUser";
import { find, push } from "../repositories/taskRepository";

const createUserFn = (taskId: string) => {
  return createUser(taskId, push, find);
};

export { createUserFn as createUser };
