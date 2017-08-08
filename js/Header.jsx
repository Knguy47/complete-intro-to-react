import React from 'react';
import { boolean } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let utilSpace;
  if(props.showSearch) {
    utilSpace = <h1>Something</h1>;
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
}

Header.defaultProps = {
  showSearch: false,
}

export default Header;