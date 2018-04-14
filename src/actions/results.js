import API from '../utils/api';
import { createAction } from 'redux-actions';

export const updateSearch = createAction('UPDATE_SEARCH');
export const searchSong = payload => (dispatch, getState) => {

  if(payload.name === "") {
    console.log("nope");
    return false;
  }

  dispatch({
    type: 'FETCHING_SEARCH',
  });
  Promise
    .resolve(
      API.search(payload)
    )
    .then(data => {
      dispatch({
        type: 'RECEIVED_SEARCH',
        payload: data.splice(0,20),
      })
    })
    .catch(error => {
      console.log("error");
    })
};
