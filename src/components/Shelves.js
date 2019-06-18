import React, { Component } from 'react';
import Book from './Book';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
var ext = require ('../utils/CurrentShelves');
var lib = require('../utils/BooksAPI.js');

export class Shelves extends Component {
    static propTypes = {

    }
    
    state = {shelves:[{name:'currentlyReading',label:'Currently Reading', books:[], addBookButton:false}, 
    {name:'wantToRead', label:'Want to Read', books:[], addBookButton:true},
    {name:'read', label:'Read', books:[], addBookButton:false}
    ]};

    updateShelves = (currentBooks) => {
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
                   cshelves[0].books.push(book);
                } else if (book.shelf === cshelves[1].name) {
                   cshelves[1].books.push(book); 
                } else if (book.shelf === cshelves[2].name) {
                   cshelves[2].books.push(book); 
                }
            });         
            this.setState({shelves: cshelves});
            console.log(this.state.shelves);
           })
           .catch(err => console.log(err));
              
    }

    componentDidMount() {
        let currentBooks = ext.currentShelves();
         console.log(currentBooks.books[0]);
         this.updateShelves(currentBooks);
    }
    render() {
        const { shelves } = this.state;
        return (
            <div>
                <h3 className="list-books-title">Shelves Page</h3>
                {shelves.map((shelf) => (<Shelf shelfName={shelf.label} addBookButton={shelf.addBookButton} books={shelf.books} updateShelves={this.updateShelves} />))}
            </div>
        )
    }
}

export default Shelves
