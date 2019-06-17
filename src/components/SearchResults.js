import React, { Component } from 'react';
import Book  from './Book';

class SearchResults extends Component {
    
    render() {
        return (
            <div className="search-books-results">
                <h2>Results</h2>
                <Book />
            </div>
        )
    }
}

export default SearchResults
