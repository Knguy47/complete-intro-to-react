import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const hello = 'hello';
  return (
    <header>
        <h1>
          <Link to='/'>
          svideo
          </Link>
        </h1>
        <p>
          {hello}
        </p>
    </header>
  );
};

export default Header;