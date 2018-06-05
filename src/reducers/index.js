import { combineReducers } from 'redux';
import auth from './auth';
import playlist from './playlist';
import player from './player';
import results from './results';

const osuplay = combineReducers ({
  auth,
  playlist,
  player,
  results,
})

export default osuplay;
