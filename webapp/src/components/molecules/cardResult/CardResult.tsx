import React from 'react';
import './CardResult.css';

export interface CardResultProps {
  count: number;
}

export class CardResult extends React.Component<CardResultProps, {}> {
  render() {
    const pluralizedVote = this.props.count > 1 ? 'votes' : 'vote';
    return (
      <div>
        {this.props.count} {pluralizedVote}
      </div>
    );
  }
}
