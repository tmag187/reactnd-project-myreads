import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Book extends Component {
    static propTypes = {

    }

    render() {
        const { book } = this.props;
        const image = book.imageLinks.thumbnail;
        const title = book.title;
        const authors = book.authors;
        console.log(image);
        return (
            <React.Fragment>
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors[0]}</div>
                        </div>
            </React.Fragment>
        )
    }
}

export default Book
