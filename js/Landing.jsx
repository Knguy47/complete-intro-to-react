import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func, object } from 'prop-types';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Landing extends Component {

  componentDidMount() {
    this.props.clearSearchTerm();
  }

  goToSearch = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>Landing Page</h1>
        <form onSubmit={this.goToSearch}>
          <input value={this.props.searchTerm} 
            onChange={this.props.handleSearchTermChange} 
            type="text" 
            placeholder="Search" 
          />
        </form>
        <Link to="/search">or Browse All Something</Link>
      </div>
    );
  }
}

Landing.propTypes = {
  searchTerm: string,
  handleSearchTermChange: func.isRequired,
  history: object,
  clearSearchTerm: func.isRequired,
};

Landing.defaultProps = {
  searchTerm: '',
  history: {}
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
  clearSearchTerm() {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
