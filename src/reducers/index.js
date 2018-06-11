import { combineReducers } from 'redux';
import user from './user';
import playlist from './playlist';
import player from './player';
import results from './results';

const osuplay = combineReducers ({
  user,
  playlist,
  player,
  results,
})

export default osuplay;
