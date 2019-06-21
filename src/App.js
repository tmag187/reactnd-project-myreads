import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Shelves from './components/Shelves';
import FindBook from './components/FindBook';
var lib = require('./utils/BooksAPI.js');

class App extends Component {


   state = {shelves:[{name:'currentlyReading',label:'Currently Reading', books:[], addBookButton:false}, 
    {name:'wantToRead', label:'Want to Read', books:[], addBookButton:true},
    {name:'read', label:'Read', books:[], addBookButton:false}
    ], shelfStatus:{}}; 

  setShelves = (status) => {
    console.log("set shelves");
    this.setState({shelfStatus:status});
  }

  updateShelves = (currentBooks) => {
    let shelfStatus = {};
    currentBooks = lib.getAll()
    .then(currentBooks => {
        console.log(currentBooks);
        this.setState({shelves:[{name:'currentlyReading',label:'Currently Reading', books:[], addBookButton:false}, 
        {name:'wantToRead', label:'Want to Read', books:[], addBookButton:true},
        {name:'read', label:'Read', books:[], addBookButton:false}
        ]});
        let cshelves = this.state.shelves;
        currentBooks.forEach((book) => {
            if (book.shelf === cshelves[0].name) {
               //cshelves[0].books.push(book);
               cshelves[0].books = [...cshelves[0].books, book];
            } else if (book.shelf === cshelves[1].name) { 
               cshelves[1].books = [...cshelves[1].books, book];
            } else if (book.shelf === cshelves[2].name) {
               cshelves[2].books = [...cshelves[2].books, book];
            }
            shelfStatus[book.id] = book.shelf;
        });  
      //  this.setShelves(shelfStatus);       
        this.setState({shelves: cshelves , shelfStatus:shelfStatus});
      //  console.log(this.state.shelves);
       })
       .catch(err => console.log(err));
          
}

componentDidMount() {
  this.updateShelves();
}

  render () {
  return (
    <div className="App">
      <header />
      <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Shelves {...props} setShelves={this.setShelves}  updateShelves={this.updateShelves} shelves={this.state.shelves} />} />
          <Route exact path="/search" render={(props) => <FindBook {...props} setShelves={this.setShelves} shelves={this.state.shelfStatus} />} />
        </Switch>
      </div>
      </Router>
    </div>
  );
  }
}

export default App;
