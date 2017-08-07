import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import ShowCard from './ShowCard';

class Search extends Component { 
  state = {
    searchTerm: ''
  };
  
  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo okay</h1>
          <input 
            onChange={this.handleSearchTermChange} 
            value={this.state.searchTerm} 
            type="text" 
            placeholder="Search" 
          />
        </header>
        <div>
          {this.props.shows
            .filter(show => 
              `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show =>
              <ShowCard show={show} key={show.imdbID} />
          )}
        </div>
      </div>
    );
  }
}

Search.propsTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired
  }).isRequired
};
export default Search;
