import React, { Component } from 'react';
import SearchEntry from './SearchEntry';
import SearchResults from './SearchResults';

export class FindBook extends Component {
    updateResults = () => {
        console.log("updating book results...");
    }
    render() {
        return (
            <div>
                <SearchEntry update={this.updateResults} />
                <SearchResults />
            </div>
        )
    }
}

export default FindBook
