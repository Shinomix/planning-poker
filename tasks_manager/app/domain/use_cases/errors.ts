export class TaskNotFound extends Error {
  constructor(message = "task does not exist") {
    super(message);
    this.name = "TaskNotFound";
  }
}

export class UserNotFound extends Error {
  constructor(message = "user does not exist") {
    super(message);
    this.name = "UserNotFound";
  }
}
