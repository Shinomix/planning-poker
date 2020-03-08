import { createUser } from "../../../domain/use_cases/createUser";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/aggregates/createTask";
import { TaskNotFound } from "../../../domain/use_cases/errors";

describe("'createUser' use case", () => {
  const commitFn = jest.fn();
  const findFn = jest.fn();
  const taskId: string = "1";

  let task: Task;

  beforeEach(() => {
    task = createTask({ id: taskId });

    commitFn.mockClear();
    findFn.mockClear();
    findFn.mockReturnValue(task);
  });

  describe("when the task cannot be found", () => {
    beforeEach(() => {
      findFn.mockReturnValue(undefined);
    });

    it("throw a TaskNotFound exception", () => {
      expect(() => {
        createUser(taskId, commitFn, findFn);
      }).toThrowError(TaskNotFound);
    });
  });

  describe("when there is no user for the task", () => {
    it("creates a first one", () => {
      const result = createUser(taskId, commitFn, findFn);

      expect(result.users.length).toBe(1);
    });

    it("persists the changes", () => {
      createUser(taskId, commitFn, findFn);

      expect(commitFn).toHaveBeenCalledWith(task);
    });
  });

  describe("when there already is users for the task", () => {
    beforeEach(() => {
      task.users.push({ id: "x" });
    });

    it("adds a new one", () => {
      const result = createUser(taskId, commitFn, findFn);

      expect(result.users.length).toBe(2);
    });

    it("persists the changes", () => {
      createUser(taskId, commitFn, findFn);

      expect(commitFn).toHaveBeenCalledWith(task);
    });
  });
});
