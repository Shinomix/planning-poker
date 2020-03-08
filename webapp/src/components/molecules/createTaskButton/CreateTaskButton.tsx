import React from 'react'
import './CreateTaskButton.css'

export interface CreateTaskButtonProps {
  onCreateTask(e: React.MouseEvent<HTMLButtonElement>): void,
  isDisabled: boolean
}

export class CreateTaskButton extends React.Component<CreateTaskButtonProps, {}> {
  render() {
    return(
      <button disabled={this.props.isDisabled} onClick={ (e) => this.props.onCreateTask(e) }>
        Create a task
      </button>
    )
  }
}
