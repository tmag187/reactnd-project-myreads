import React, { Component } from 'react';
import Book from './Book';
import Shelf from './Shelf';
import PropTypes from 'prop-types';

export class Shelves extends Component {
    static propTypes = {

    }
    state = {shelves:[{name:'current',label:'Currently Reading', books:[], addBookButton:false}, 
    {name:'planned', label:'Want to Read', books:[], addBookButton:true},
    {name:'read', label:'Read', books:[], addBookButton:false}
    ]};
    render() {
        const { shelves } = this.state;
        return (
            <div>
                <h3 className="list-books-title">Shelves Page</h3>
                {shelves.map((shelf) => (<Shelf shelfName={shelf.label} addBookButton={shelf.addBookButton} />))}
            </div>
        )
    }
}

export default Shelves
