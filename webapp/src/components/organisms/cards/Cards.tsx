import React from 'react';
import { createUser, vote, getResult } from '../../../api';
import { Card } from '../../molecules/card/Card';
import { CardResult } from '../../molecules/cardResult/CardResult';

import './Cards.css';

interface TaskResult {
  [key: number]: number;
}
export interface CardsState {
  taskId: string;
  userId: string;
  userVote: number | null;
  results: TaskResult;
  pollingInterval: NodeJS.Timeout | null;
}

export class Cards extends React.Component<{}, CardsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      results: {},
      taskId: this.getTaskId(window.location.href),
      userId: '',
      userVote: null,
      pollingInterval: null,
    };
  }

  async componentDidMount() {
    await this.createUser();
    this.startResultPolling();
  }

  componentWillUnmount() {
    this.stopResultPolling();
  }

  async createUser() {
    const result = await createUser(this.state.taskId);
    if (!result.user) {
      window.location.href = '/';
    }

    this.setState({ userId: result.user.id });
  }

  startResultPolling() {
    const resultPollingInterval: NodeJS.Timeout = setInterval(async () => {
      await this.pollResult();
    }, 1000);
    this.setState({ pollingInterval: resultPollingInterval });
  }

  stopResultPolling() {
    if (this.state.pollingInterval) {
      clearInterval(this.state.pollingInterval);
    }
  }

  async pollResult() {
    const data = await getResult(this.state.taskId);
    if (data.result) {
      this.setState({ results: data.result });
    } else {
      console.warn('failed to poll results for the task');
    }
  }

  getTaskId(url: string): string {
    const urlPath: Array<string> = url.split('/');

    return urlPath[urlPath.length - 1];
  }

  cardValues(): Array<number> {
    return [0, 0.5, 1, 2, 3, 5, 8, 13];
  }

  async onCardSelect(value: number): Promise<void> {
    if (this.state.userVote === value) {
      return;
    }
    this.setState({ userVote: value });

    await vote(this.state.taskId, this.state.userId, value);
  }

  isSelectedCard(value: number): boolean {
    return this.state.userVote === value;
  }

  resultFor(value: number) {
    return this.state.results ? this.state.results[value] || 0 : 0;
  }

  render() {
    return (
      <div className="cards-container">
        {this.cardValues().map((cardValue: number) => (
          <div className="card-container" key={cardValue.toString()}>
            <Card
              value={cardValue}
              onCardSelect={this.onCardSelect.bind(this)}
              isSelected={this.isSelectedCard(cardValue)}
            />
            <CardResult count={this.resultFor(cardValue)} />
          </div>
        ))}
      </div>
    );
  }
}
