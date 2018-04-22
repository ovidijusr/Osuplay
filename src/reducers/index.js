import { combineReducers } from 'redux';
import playlist from './playlist';
import player from './player';
import results from './results';

const osuplay = combineReducers ({
  playlist,
  player,
  results,
})

export default osuplay;
