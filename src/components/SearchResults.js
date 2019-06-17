import React, { Component } from 'react';
import Book  from './Book';

class SearchResults extends Component {
    
    render() {
        const { books } = this.props;
        console.log("*>"+books);
        return (
            <div className="search-books-results">
                <h2>Results</h2>
                <div className="books-grid">
                {books === undefined ? <h2>No Books Found</h2> : books.map((book) => (<Book book={book} />))}
                </div>
            </div>
        )
    }
}

export default SearchResults
