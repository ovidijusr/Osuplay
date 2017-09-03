const initialState = {
  song: "http://osu.hexide.com/beatmaps/14514/content/mp3/full"
}
const player = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PAUSE':
      return {
        ...state,
        pause: !state.pause,
      }
    case 'SET_SONG':
      return {
        ...state,
        song: action.song,
      }
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.volume,
      }
    default:
      return state;
  }
}
export default player;