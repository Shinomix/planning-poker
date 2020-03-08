import React from 'react';
import './CardResult.css';

export interface CardResultProps {
  count: number;
}

export class CardResult extends React.Component<CardResultProps, {}> {
  render() {
    const pluralizedVote = this.props.count > 1 ? 'votes' : 'vote';
    return (
      <div className="card-result">
        {this.props.count} {pluralizedVote}
      </div>
    );
  }
}
