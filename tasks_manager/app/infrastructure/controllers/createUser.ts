import { createUser } from "../adapters/createUser";
import { format as formatCreateUser } from "./presenters/createUser";
import { format as formatError } from "./presenters/error";

const createUserEndpoint = (req: any, res: any) => {
  const taskId: string = req.params.id;

  let body: string;
  try {
    const task = createUser(taskId);

    body = formatCreateUser(task);
    res.statusCode = 200;
  } catch (e) {
    body = formatError(e);
    res.statusCode = 400;
  }

  res.end(body);
};

export { createUserEndpoint as createUser };
