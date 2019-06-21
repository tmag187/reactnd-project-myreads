import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class BookShelfChanger extends Component {
    handleSelection = (e) => {
        this.props.change(e.target.value);
    }
    render() {
        let { shelf } = this.props;
     //   console.log(shelf);
        if (shelf === undefined) {
            shelf = "none";
        }
        return (
            <div>
                <div className="book-shelf-changer">
                              <select onChange={this.handleSelection} value={shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
            </div>
        )
    }
    static propTypes = {
        shelf : PropTypes.string.isRequired
      }
}

export default BookShelfChanger
