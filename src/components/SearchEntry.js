import React, { Component } from 'react'

export class SearchEntry extends Component {
    state = {entry:''
    };
    updateEntry = (e) => {
        const { update } = this.props;
        console.log(e.target.value);
        update();
        this.setState({[e.target.name]:e.target.value});      
    }
    render() {
        
        return (
            <React.Fragment>
                <div  className="search-books-bar">
                  <input type="text" name="entry" placeholder="Find a Book..." onChange={this.updateEntry} />
               </div>
            </React.Fragment>
        )
    }
}

export default SearchEntry
