import React from 'react';
import { CreateTaskButton } from '../../molecules/createTaskButton/CreateTaskButton';
import { createTask } from '../../../api';

import './TaskCreator.css';

export interface TaskCreatorState {
  taskId: string;
}

export class TaskCreator extends React.Component<{}, TaskCreatorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      taskId: '',
    };
  }

  async onCreateTask(
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    const task: any = await createTask();

    if (!!task) {
      this.setState({ taskId: task.id });
    } else {
      console.warn('failed to create a task, try again');
    }
  }

  isButtonDisabled(): boolean {
    return this.state.taskId !== '';
  }

  render() {
    return (
      <div className="task-creator">
        {this.state.taskId !== '' ? (
          <div className="task-link">
            Your task has been created!
            <br />
            Share this{' '}
            <a
              href={`http://localhost:4000/task/${this.state.taskId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>{' '}
            to your colleagues to vote
          </div>
        ) : null}
        <p className="task-creator-content">
          Ease your planning poker sessions by creating new tasks, sharing them
          with your colleagues and estimating them in real-time.
        </p>
        <CreateTaskButton
          onCreateTask={this.onCreateTask.bind(this)}
          isDisabled={this.isButtonDisabled()}
        />
      </div>
    );
  }
}
