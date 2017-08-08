import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Landing = (props) => (
  <div className="landing">
    <h1>Landing Page</h1>
    <input value={props.searchTerm} onChange={props.handleSearchTermChange} type="text" placeholder="Search" />
    <Link to="/search">or Browse All Something</Link>
  </div>
);

Landing.propTypes = {
  searchTerm: string,
  handleSearchTermChange: func,
};

Landing.defaultProps = {
  searchTerm: '',
  handleSearchTermChange: () => (
    ''
  ),
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
