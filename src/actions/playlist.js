import { createAction } from 'redux-actions';

export const addToPlaylist = createAction('ADD_TO_PLAYLIST');
export const nextSong = createAction('NEXT_SONG');
export const previousSong = createAction('PREVIOUS_SONG');
