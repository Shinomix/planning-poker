import React from 'react';
import './Card.css';

export interface CardProps {
  value: number;
  onCardSelect(value: number): void;
  isSelected: boolean;
}

export class Card extends React.Component<CardProps, {}> {
  render() {
    const getClassNames = (): string => {
      let classes = 'card';
      if (this.props.isSelected) {
        classes += ' selected-card';
      }
      return classes;
    };

    return (
      <div
        className={getClassNames()}
        data-value={this.props.value}
        onClick={e => this.props.onCardSelect(this.props.value)}
      >
        <div className="card-value">{this.props.value}</div>
      </div>
    );
  }
}
