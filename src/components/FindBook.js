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
        const { shelves } = this.props;
        console.log(shelves);
        return (
            <div>
                <SearchEntry update={this.updateResults} />
                <SearchResults books={this.state.results} shelves={shelves} />
            </div>
        )
    }
}

export default FindBook
