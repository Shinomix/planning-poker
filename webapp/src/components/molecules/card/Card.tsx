import React from 'react';
import './Card.css';

export interface CardProps {
  value: number;
  onCardSelect(e: React.MouseEvent<HTMLButtonElement>, value: number): void;
}

export class Card extends React.Component<CardProps, {}> {
  render() {
    return (
      <div>
        <button onClick={e => this.props.onCardSelect(e, this.props.value)}>
          {this.props.value}
        </button>
      </div>
    );
  }
}
