import React from 'react'
import './TaskCreator.css'
import { CreateTaskButton } from '../../molecules/createTaskButton/CreateTaskButton'

export interface TaskCreatorState {
  taskId: string;
}

export class TaskCreator extends React.Component<{}, TaskCreatorState> {
  constructor() {
    super({});

    this.state = {
      taskId: ''
    };
  }

  onCreateTask(event: React.MouseEvent<HTMLButtonElement>): void {
    console.log('on create task button click', event);

    this.setState({ taskId: 'toto' });
  }

  isButtonDisabled(): boolean {
    return this.state.taskId !== '';
  }

  render() {
    return(
      <div>
        <CreateTaskButton onCreateTask={this.onCreateTask.bind(this)} isDisabled={this.isButtonDisabled()}/>
        {
          this.state.taskId !== ''
          ? <div>
            Your task has been created!<br/>
            Share <a href={`http://localhost:4000/task/${this.state.taskId}`} target="_blank">this link</a> to your colleagues to vote
          </div>
          : null
        }
      </div>
    )
  }
}
