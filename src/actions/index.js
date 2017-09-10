import { createAction } from 'redux-actions';

export const setSong = payload => (dispatch, getState) => (
  {
    type: 'SET_SONG',
    song: payload,
  }
)

export const togglePause = createAction('TOGGLE_PAUSE');