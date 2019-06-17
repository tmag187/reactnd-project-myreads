import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var lib = require('../utils/BooksAPI.js');

export class SearchEntry extends Component {
    state = {entry:''
    };
    updateEntry = (e) => {
        const { update } = this.props;
        console.log(e.target.value);    
        this.setState({[e.target.name]:e.target.value}); 
        lib.search(e.target.value)
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
                  <input type="text" name="entry" placeholder="Find a Book..." onChange={this.updateEntry} />
               </div>
            </React.Fragment>
        )
    }
}

export default SearchEntry