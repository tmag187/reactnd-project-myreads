import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Shelf extends Component {
    updateShelf = () => {
        this.props.updateShelves();
    }
    render() {
        const { books } = this.props;
        return (
            <div>
                <div className="bookshelf-title"><h2>{this.props.shelfName}</h2></div>
                {this.props.addBookButton && <div className="open-search"><Link to='search'><button>Add a Book</button></Link></div>}
                <div className="books-grid">
                {books.map((book, index) => (<Book key={index} book={book} updateShelf={this.updateShelf} />))}
                </div>
            </div>
        )
    }
}

export default Shelf
