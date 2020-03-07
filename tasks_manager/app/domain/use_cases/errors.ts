export class TaskNotFound extends Error {
  constructor(message = "task does not exist") {
    super(message);
    this.name = "TaskNotFound";
  }
}
