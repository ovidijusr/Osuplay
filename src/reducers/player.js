const initialState = {
  state: false,
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
        song: action.payload,
        pause: false,
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
