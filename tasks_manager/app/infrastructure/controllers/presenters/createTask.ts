import { Task } from "../../../domain/aggregates/task";

const format = (task: Task) => {
  return { id: task.id.id }
}

export { format }