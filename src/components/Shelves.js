import React, { Component } from 'react';
import Book from './Book';
import Shelf from './Shelf';
import PropTypes from 'prop-types';


export class Shelves extends Component {
    static propTypes = {

    }
    
    componentDidMount() {
     //   let currentBooks = ext.currentShelves();
     //    console.log(currentBooks.books[0]);
     this.props.updateShelves();
    }
    render() {
        const { shelves } = this.props;
        
        return (
            <div className="list-books-content">
                <div className="list-books-title"><h1>MyReads</h1></div>
                {shelves.map((shelf, index) => (<Shelf key={index} shelfName={shelf.label} addBookButton={shelf.addBookButton} books={shelf.books} updateShelves={this.props.updateShelves} />))}
            </div>
        )
    }
    static propTypes = {
        shelves : PropTypes.array.isRequired
      }
}

export default Shelves
