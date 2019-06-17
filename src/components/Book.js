import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types'

export class Book extends Component {
    static propTypes = {

    }

    render() {
        const { book } = this.props;
        let image;
        let authors = [];
        try {
          image = book.imageLinks.thumbnail; 
        } catch {
          image = "";
        }
        const title = book.title;
        try {
          authors = book.authors;
        } catch {
          authors[0] = "";
        }
        console.log(image);
        return (
            <React.Fragment>
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                          <BookShelfChanger />
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors !== undefined && authors.map((author) => (<div>{author}</div>))}</div>
                        </div>
            </React.Fragment>
        )
    }
}

export default Book
