import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Shelves from './components/Shelves';
import FindBook from './components/FindBook';

class App extends Component {


  
  state = {shelfStatus:{}};

  setShelves = (status) => {
    console.log("set shelves");
    this.setState({shelfStatus:status});
  }

  render () {
  return (
    <div className="App">
      <header />
      <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Shelves {...props} setShelves={this.setShelves} />} />
          <Route exact path="/search" render={(props) => <FindBook {...props} setShelves={this.setShelves} shelves={this.state.shelfStatus} />} />
        </Switch>
      </div>
      </Router>
    </div>
  );
  }
}

export default App;
