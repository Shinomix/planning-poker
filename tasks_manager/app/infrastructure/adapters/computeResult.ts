import { computeResult } from "../../domain/use_cases/computeResult";
import { find } from "../repositories/taskRepository";

const computeResultFn = (taskId: string) => {
  return computeResult(taskId, find);
};

export { computeResultFn as computeResult };
