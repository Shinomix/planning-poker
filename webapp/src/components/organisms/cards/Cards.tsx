import React from 'react';
import { Card } from '../../molecules/card/Card';

import './Cards.css';
import { CardResult } from '../../molecules/cardResult/CardResult';

export interface CardsState {
  results: Map<number, number>;
}

export class Cards extends React.Component<{}, CardsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      results: new Map(),
    };
  }

  cardValues(): Array<number> {
    return [0, 0.5, 1, 2, 3, 5, 8, 13];
  }

  onCardSelect(
    event: React.MouseEvent<HTMLButtonElement>,
    value: number
  ): void {
    console.log('on card select', value);

    const currentValue: number = this.state.results
      ? this.state.results.get(value) || 0
      : 0;

    this.setState({
      results: this.state.results.set(value, currentValue + 1),
    });
  }

  resultFor(value: number) {
    return this.state.results ? this.state.results.get(value) || 0 : 0;
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
            <CardResult count={this.resultFor(cardValue)} />
          </div>
        ))}
      </div>
    );
  }
}
