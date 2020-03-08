import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/organisms/header/Header';
import { TaskCreator } from './components/organisms/taskCreator/TaskCreator';
import { Cards } from './components/organisms/cards/Cards';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={TaskCreator} exact />
            <Route path="/task/:id" component={Cards} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
