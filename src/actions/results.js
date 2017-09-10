import API from '../utils/api';
import { createAction } from 'redux-actions';

export const updateSearch = createAction('UPDATE_SEARCH');
export const searchSong = payload => (dispatch, getState) => {
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
        payload: data,
      })
    })
};
