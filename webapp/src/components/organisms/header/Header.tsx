import React from 'react';
import './Header.css';

export class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="header">
        <p className="header-title">🃏Planning Poker 🃏</p>
      </header>
    );
  }
}
