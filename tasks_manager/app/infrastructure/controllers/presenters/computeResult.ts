import { TaskResult } from "../../../domain/entities/taskResult";

const format = (result: TaskResult): string => {
  const jsonResult = Object.create(null);
  for (let [k, v] of result) {
    jsonResult[k] = v;
  }

  return JSON.stringify({ result: jsonResult });
};

export { format };
