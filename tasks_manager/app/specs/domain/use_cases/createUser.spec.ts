import { createUser } from "../../../domain/use_cases/createUser";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/aggregates/createTask";

describe("'createUser' use case", () => {
  const persistFn = jest.fn();
  let task: Task;

  beforeEach(() => {
    task = createTask({ id: "1" }, persistFn);

    persistFn.mockClear();
  });

  describe("when there is no user for the task", () => {
    it("creates a first one", () => {
      const result = createUser(task);

      expect(result.users.length).toBe(1);
    });

    it("persists the changes", () => {
      createUser(task);

      expect(persistFn).toHaveBeenCalledTimes(1);
    });
  });

  describe("when there already is users for the task", () => {
    beforeEach(() => {
      task.users.push({ id: "x" });
    });

    it("adds a new one", () => {
      const result = createUser(task);

      expect(result.users.length).toBe(2);
    });

    it("persists the changes", () => {
      createUser(task);

      expect(persistFn).toHaveBeenCalledTimes(1);
    });
  });
});
