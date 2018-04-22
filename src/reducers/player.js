const initialState = {
  currentTime: 0,
  volume: 0.8,
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_SONG':
      return {
        ...state
      }
    case 'TOGGLE_PAUSE':
      return {
        ...state,
        pause: !state.pause,
      }
    case 'SET_TOTAL_TIME':
      return {
        ...state,
        totalTime: action.payload,
      }
    case 'SET_SONG':
      return {
        ...state,
        song: action.payload,
        pause: false,
      }
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload
      }
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload,
      }
    default:
      return state;
  }
}
export default player;
