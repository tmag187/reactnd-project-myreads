import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Shelf extends Component {
    render() {
        const { books } = this.props;
        return (
            <div>
                <h2>{this.props.shelfName}</h2>
                {this.props.addBookButton && <div className="open-search"><Link to='book/search'><button onClick="" >Add a Book</button></Link></div>}
                {books.map((book) => (<Book book={book}/>))}
            </div>
        )
    }
}

export default Shelf
