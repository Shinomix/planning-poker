import { vote } from "../../../domain/use_cases/vote";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/aggregates/createTask";
import { User } from "../../../domain/entities/user";
import { VoteValue } from "../../../domain/entities/voteValue";
import { TaskNotFound, UserNotFound } from "../../../domain/use_cases/errors";

describe("'vote' use case", () => {
  const commitFn = jest.fn();
  const findFn = jest.fn();
  const userId: string = "1";
  const taskId: string = "1";

  let task: Task;
  let value: VoteValue;

  beforeEach(() => {
    task = createTask({ id: taskId });
    value = 1;

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
        vote(taskId, userId, value, commitFn, findFn);
      }).toThrowError(TaskNotFound);
    });
  });

  describe("when the user does not exist", () => {
    it("throw a UserNotFound exception", () => {
      expect(() => {
        vote(taskId, "something_else", value, commitFn, findFn);
      }).toThrowError(UserNotFound);
    });
  });

  describe("when user has not voted", () => {
    beforeEach(() => {
      task.users.push({ id: userId });
    });

    it("adds a new vote", () => {
      const result = vote(taskId, userId, value, commitFn, findFn);

      expect(result.votes.length).toBe(value);
      expect(result.votes[0].user.id).toEqual(userId);
    });

    it("persists the task changes", () => {
      const result = vote(taskId, userId, value, commitFn, findFn);

      expect(commitFn).toHaveBeenCalledWith(task);
    });
  });

  describe("when the user has already voted", () => {
    beforeEach(() => {
      const user: User = { id: userId };

      task.users.push(user);
      task.votes.push({ user, value: 1 });

      value = 13;
    });

    it("updates the existing votes", () => {
      const result = vote(taskId, userId, value, commitFn, findFn);

      expect(result.votes.length).toBe(1);
      expect(result.votes[0].value).toEqual(value);
    });
  });
});
