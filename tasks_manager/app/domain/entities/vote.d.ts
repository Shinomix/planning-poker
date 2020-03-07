import { User } from "./user";
import { VoteValue } from "./voteValue";

interface Vote {
  value: VoteValue;
  user: User;
}

export { Vote };
