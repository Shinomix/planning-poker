import React from 'react';
import { Card } from '../../molecules/card/Card';

import './Cards.css';

export class Cards extends React.Component<{}, {}> {
  cardValues(): Array<number> {
    return [0, 0.5, 1, 2, 3, 5, 8, 13];
  }

  onCardSelect(
    event: React.MouseEvent<HTMLButtonElement>,
    value: number
  ): void {
    console.log('on card select', value);
  }

  render() {
    return (
      <div>
        {this.cardValues().map((cardValue: number) => (
          <div key={cardValue.toString()}>
            <Card
              value={cardValue}
              onCardSelect={this.onCardSelect.bind(this)}
            />
          </div>
        ))}
      </div>
    );
  }
}
