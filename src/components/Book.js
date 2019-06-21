import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
var lib = require('../utils/BooksAPI.js');

export class Book extends Component {
    
    state = {
      currentShelf:''
    }

    setShelf = () => {
   //   console.log("book id " + this.props.book.id);
      lib.get(this.props.book.id)
      .then(data => {
   //      console.log("book by id " + data.shelf);
         if (data.shelf === undefined) {
           this.props.book.shelf = "none";
         } else {
          this.props.book.shelf = data.shelf;
         }
      //  this.props.updateShelf();
       })
       .catch(err => console.log(err));
    }

    changeShelf = (shelf) => {
      const { book } = this.props;
      console.log(shelf);
      this.setState({currentShelf:shelf});
      lib.update(book, shelf)
      .then(data => {
        this.props.updateShelf();
       })
       .catch(err => console.log(err));
      
    }

    render() {
        let { book } = this.props;
        if (book.shelf === undefined) {
    //      this.setShelf();
        }
     //   console.log("book shelf ^^^" + book);
      //  console.log(book.title);
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
        return (
            <React.Fragment>
            <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                          <BookShelfChanger change={this.changeShelf} shelf={book.shelf} />
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors !== undefined  && authors.map((author, index) => (<div key={index}>{author}</div>))}</div>
                        </div>
            </React.Fragment>
        )
    }
    static propTypes = {
      book : PropTypes.object.isRequired
    }
}

export default Book
