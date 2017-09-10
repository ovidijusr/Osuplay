import API from '../utils/api';

export const searchSong = payload => (dispatch, getState) => {
  dispatch({
    type: 'SEARCH_SONG_LOADING',
  });
  Promise
    .resolve(
      API.search(payload)
    )
};
