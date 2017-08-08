import React from 'react';
import { boolean, func, string } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let utilSpace;
  if(props.showSearch) {
    utilSpace = ( 
      <input 
        onChange={props.handleSearchTermChange} 
        value={props.searchTerm} 
        type="text" 
        placeholder="Search" 
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to='/search'>
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
        <h1>
          <Link to='/'>
          svideo
          </Link>
        </h1>
        {utilSpace}
    </header>
  );
};

Header.propTypes = {
  showSearch: boolean,
  handleSearchTermChange: func.isRequired,
  searchTerm: string,
}

Header.defaultProps = {
  showSearch: false,
  searchTerm: '',
}

export default Header;