import { computeResult } from "../adapters/computeResult";
import { format as formatComputeResult } from "./presenters/computeResult";
import { format as formatError } from "./presenters/error";

const computeResultEndpoint = (req: any, res: any) => {
  const taskId: string = req.params.id;

  let body: string;
  try {
    const result = computeResult(taskId);

    body = formatComputeResult(result);
    res.statusCode = 200;
  } catch (e) {
    body = formatError(e);
    res.statusCode = 400;
  }

  res.end(body);
};

export { computeResultEndpoint as computeResult };
