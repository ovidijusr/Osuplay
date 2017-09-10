import { combineReducers } from 'redux';
import player from './player';
import results from './results';

const osuplay = combineReducers ({
  player,
  results,
})

export default osuplay;