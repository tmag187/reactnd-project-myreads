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
                <h2>{this.props.shelfName}</h2>
                {this.props.addBookButton && <div className="open-search"><Link to='book/search'><button onClick="" >Add a Book</button></Link></div>}
                <div className="books-grid">
                {books.map((book) => (<Book book={book} updateShelf={this.updateShelf} />))}
                </div>
            </div>
        )
    }
}

export default Shelf
