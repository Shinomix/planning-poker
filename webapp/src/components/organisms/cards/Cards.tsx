import React from 'react';
import { useParams } from 'react-router-dom';
import { createUser, vote } from '../../../api';
import { Card } from '../../molecules/card/Card';
import { CardResult } from '../../molecules/cardResult/CardResult';

import './Cards.css';


export interface CardsState {
  taskId: string;
  userId: string;
  results: Map<number, number>;
}

export class Cards extends React.Component<{}, CardsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      results: new Map(),
      taskId: this.getTaskId(window.location.href),
      userId: ''
    };
  }

  async componentDidMount() {
    const result = await createUser(this.state.taskId);

    this.setState({ userId: result.user.id });
  }

  getTaskId(url: string): string {
    const urlPath: Array<string> = url.split('/');

    return urlPath[urlPath.length - 1 ];
  }

  cardValues(): Array<number> {
    return [0, 0.5, 1, 2, 3, 5, 8, 13];
  }

  async onCardSelect(
    event: React.MouseEvent<HTMLButtonElement>,
    value: number
  ): Promise<void> {
    const result = await vote(this.state.taskId, this.state.userId, value);
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
