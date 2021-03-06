import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var lib = require('../utils/BooksAPI.js');

export class SearchEntry extends Component {
    state = {entry:''
    };
    updateEntry = (e) => {
        const { update } = this.props;
        let entry = e.target.value;    
        this.setState({[e.target.name]:entry}); 
        lib.search(entry)
        .then(data => {
           // console.log(data);
            update(data);
          })
          .catch(err => console.log(err));
        
    }

    render() {
        
        return (
            <React.Fragment>
                <div  className="search-books-bar">
                  <Link to='/'><button className="close-search">Close</button></Link>
                  <div className="search-books-input-wrapper">
                  <input type="text" name="entry" placeholder="Find a Book..." onChange={this.updateEntry} />
                  </div>
               </div>
            </React.Fragment>
        )
    }
}

export default SearchEntry
