import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm, error: null };
}

export function clearSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData};
}

export function getAPIDetails(imdbID) {
  console.log(imdbID); // eslint-disable-line no-console
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        console.log(response.data) // eslint-disable-line no-console
        dispatch(addAPIData(response.data));
      })
      .catch(err => {
        console.error('axios error', err); // eslint-disable-line no-console
      });
  }
}