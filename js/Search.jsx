import React from 'react';
import { array, string } from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import ShowCard from './ShowCard';

const Search = (props) => (
  <div className="search">
    <Header 
      showSearch
    />
    <div>
      {props.shows
        .filter(show => 
          `${show.title} ${show.description}`.toUpperCase()
            .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show =>
          <ShowCard show={show} key={show.imdbID} />
      )}
    </div>
  </div>
);

Search.propTypes = {
  searchTerm: string.isRequired, // eslint-disable-line react/no-unused-prop-types
  shows: array
};

Search.defaultProps = {
   shows: [],
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});


export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
