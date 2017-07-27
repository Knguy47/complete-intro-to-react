import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {preload.shows.map((show, i) =>
      <ShowCard show={show} key={i} />
    )}
  </div>
)

export default Search;
