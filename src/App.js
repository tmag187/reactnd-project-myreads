import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Shelves from './components/Shelves';
import FindBook from './components/FindBook';

class App extends Component {
  render () {
  return (
    <div className="App">
      <header />
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Shelves} />
          <Route exact path="/book/search" component={FindBook} />
        </Switch>
      </div>
      </Router>
    </div>
  );
  }
}

export default App;
