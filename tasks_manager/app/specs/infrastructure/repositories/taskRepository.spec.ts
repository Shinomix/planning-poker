import {
  has,
  push,
  clear
} from "../../../infrastructure/repositories/taskRepository";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/use_cases/createTask";
import { User } from "../../../domain/entities/user";

describe("task repository", () => {
  let task: Task = createTask(() => {});

  beforeEach(() => {
    clear();
  });

  describe("'has' method", () => {
    describe("when the task is not persisted", () => {
      it("is falsy", () => {
        const result = has(task);

        expect(result).toBeFalsy();
      });
    });

    describe("when the task is already persisted", () => {
      beforeEach(() => {
        push(task);
      });

      it("is truthy", () => {
        const result = has(task);

        expect(result).toBeTruthy();
      });
    });
  });

  describe("'push' method", () => {
    describe("when the task is not persisted yet", () => {
      it("persists it", () => {
        const result = push(task);

        expect(result.id).toEqual(task.id);
        expect(has(task)).toBeTruthy();
      });
    });

    describe("when the task is already persisted", () => {
      const user: User = { id: "1" };

      it("updates it", () => {
        const first_addition = push(task);
        expect(first_addition.votes.length).toEqual(0);

        task.votes.push({ user, value: 1 });
        const result = push(task);

        expect(result.votes.length).toEqual(1);
      });
    });
  });
});
