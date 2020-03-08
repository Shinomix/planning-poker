import { vote } from "../adapters/vote";
import { format as formatVote } from "./presenters/vote";
import { format as formatError } from "./presenters/error";
import { VoteValue } from "../../domain/entities/voteValue";

const voteEndpoint = (req: any, res: any) => {
  const value: VoteValue = req.body.value;
  const userId: string = req.body.user_id;
  const taskId: string = req.params.id;

  let body: string;
  try {
    const task = vote(value, userId, taskId);

    body = formatVote(task);
    res.statusCode = 200;
  } catch (e) {
    body = formatError(e);
    res.statusCode = 400;
  }

  res.end(body);
};

export { voteEndpoint as vote };
