import { push } from '../repositories/taskRepository'
import { createTask } from '../../domain/use_cases/createTask'

const createTaskFn = () => createTask(push)

export { createTaskFn as createTask }