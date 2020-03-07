import { createUser } from "../../../domain/use_cases/createUser";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/aggregates/createTask";

describe("'createUser' use case", () => {
  const commitFn = jest.fn();
  let task: Task;

  beforeEach(() => {
    task = createTask({ id: "1" });

    commitFn.mockClear();
  });

  describe("when there is no user for the task", () => {
    it("creates a first one", () => {
      const result = createUser(task, commitFn);

      expect(result.users.length).toBe(1);
    });

    it("persists the changes", () => {
      createUser(task, commitFn);

      expect(commitFn).toHaveBeenCalledWith(task);
    });
  });

  describe("when there already is users for the task", () => {
    beforeEach(() => {
      task.users.push({ id: "x" });
    });

    it("adds a new one", () => {
      const result = createUser(task, commitFn);

      expect(result.users.length).toBe(2);
    });

    it("persists the changes", () => {
      createUser(task, commitFn);

      expect(commitFn).toHaveBeenCalledWith(task);
    });
  });
});
