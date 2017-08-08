import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import Header from './Header';
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
        <Header 
          showSearch
          searchTerm={this.state.searchTerm} 
          handleSearchTermChange={this.handleSearchTermChange}
        />
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

Search.propTypes = {
  shows: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    imdbID: string.isRequired
  }).isRequired
};

export default Search;
