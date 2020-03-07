import { vote } from "../../../domain/use_cases/vote";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/aggregates/createTask";
import { User } from "../../../domain/entities/user";
import { VoteValue } from "../../../domain/entities/voteValue";

describe("'vote' use case", () => {
  const commitFn = jest.fn();
  const user: User = { id: "1" };
  let task: Task;
  let value: VoteValue;

  beforeEach(() => {
    task = createTask({ id: "1" });
    value = 1;

    commitFn.mockClear();
  });

  describe("when user has not voted", () => {
    it("adds a new vote", () => {
      const result = vote(task, user, value, commitFn);

      expect(result.votes.length).toBe(value);
      expect(result.votes[0].user).toEqual(user);
    });

    it("persists the task changes", () => {
      const result = vote(task, user, value, commitFn);

      expect(commitFn).toHaveBeenCalledWith(task);
    });
  });

  describe("when the user has already voted", () => {
    beforeEach(() => {
      task.votes.push({ user: user, value: 1 });
      value = 13;
    });

    it("updates the existing votes", () => {
      const result = vote(task, user, value, commitFn);

      expect(result.votes.length).toBe(1);
      expect(result.votes[0].value).toEqual(value);
    });
  });
});