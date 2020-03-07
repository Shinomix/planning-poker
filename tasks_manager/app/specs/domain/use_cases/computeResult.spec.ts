import { computeResult } from "../../../domain/use_cases/computeResult";
import { Task } from "../../../domain/aggregates/task";
import { createTask } from "../../../domain/aggregates/createTask";
import { User } from "../../../domain/entities/user";
import { VoteValue } from "../../../domain/entities/voteValue";

describe("'computeResult' use case", () => {
  let task: Task;

  const first_user: User = { id: "1" };
  const second_user: User = { id: "2" };
  const first_value: VoteValue = 1;
  const second_value: VoteValue = 13;

  beforeEach(() => {
    task = createTask({ id: "1" });
  });

  describe("when there is no vote", () => {
    it("returns an empty result", () => {
      const result = computeResult(task);

      expect(result).toEqual(new Map());
    });
  });

  describe("when there is several votes with different values", () => {
    beforeEach(() => {
      task.votes.push({ user: first_user, value: first_value });
      task.votes.push({ user: second_user, value: second_value });
    });

    it("returns several elements", () => {
      const result = computeResult(task);

      expect(result.size).toEqual(2);
      expect(result.get(first_value)).toEqual(1);
      expect(result.get(second_value)).toEqual(1);
    });
  });

  describe("when there is several votes with the same value", () => {
    beforeEach(() => {
      task.votes.push({ user: first_user, value: first_value });
      task.votes.push({ user: second_user, value: first_value });
    });

    it("returns only one element", () => {
      const result = computeResult(task);

      expect(result.size).toEqual(1);
      expect(result.get(first_value)).toEqual(2);
      expect(result.get(second_value)).toBeUndefined();
    });
  });
});
