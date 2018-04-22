import { createAction } from 'redux-actions';

export const setSong = createAction('SET_SONG');
export const setCurrentTime = createAction('SET_CURRENT_TIME');
export const togglePause = createAction('TOGGLE_PAUSE');
export const setTotalTime = createAction('SET_TOTAL_TIME');
