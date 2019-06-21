import React, { Component } from 'react';
import Book  from './Book';

class SearchResults extends Component {
    
    setSearchShelves = () => {
        const { books, shelves } = this.props;
        if (books !== undefined && books[0] !== undefined ) {
        console.log("@books  "+ books[0]);
        books.map((book, index) => {
            if (book.shelf === undefined && shelves[book.id] !== undefined) {
                book.shelf = shelves[book.id];
                console.log('@book shelf ' + book.shelf + ' shelves[] ' + shelves[book.id]);
            }
        });
      }
    }

    render() {
    const { books } = this.props;
  //  console.log("*>"+books);
    this.setSearchShelves();
        return (
            <div className="search-books-results">
                <h2>Results</h2>
                <ol className="books-grid">
                {(books === undefined || books[0] === undefined)? <h2>No Books Found</h2> : books.map((book, index) => (<Book key={index} book={book} />))}
                </ol>
            </div>
        )
    }
}

export default SearchResults
