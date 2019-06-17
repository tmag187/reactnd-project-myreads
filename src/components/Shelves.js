import React, { Component } from 'react';
import Book from './Book';
import Shelf from './Shelf';
import PropTypes from 'prop-types';
var ext = require ('../utils/CurrentShelves');

export class Shelves extends Component {
    static propTypes = {

    }
    
    state = {shelves:[{name:'current',label:'Currently Reading', books:[], addBookButton:false}, 
    {name:'planned', label:'Want to Read', books:[], addBookButton:true},
    {name:'read', label:'Read', books:[], addBookButton:false}
    ]};

    componentDidMount() {
        let currentBooks = ext.currentShelves();
         console.log(currentBooks.books[0]);
         let cshelves = this.state.shelves;
         let shelf = [];
         cshelves[0].books.push(currentBooks.books[0]);
         cshelves[1].books.push(currentBooks.books[1]);
         cshelves[2].books.push(currentBooks.books[2]);
         this.setState({shelves: cshelves});
    }
    render() {
        const { shelves } = this.state;
        return (
            <div>
                <h3 className="list-books-title">Shelves Page</h3>
                {shelves.map((shelf) => (<Shelf shelfName={shelf.label} addBookButton={shelf.addBookButton} books={shelf.books} />))}
            </div>
        )
    }
}

export default Shelves
