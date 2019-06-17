import React, { Component } from 'react';
import SearchEntry from './SearchEntry';
import SearchResults from './SearchResults';

export class FindBook extends Component {
    state = {
        results:[]
    }
    updateResults = (books) => {
        console.log("updating book results...");
        this.setState({results:books});
    }
    render() {
        return (
            <div>
                <SearchEntry update={this.updateResults} />
                <SearchResults books={this.state.results} />
            </div>
        )
    }
}

export default FindBook
