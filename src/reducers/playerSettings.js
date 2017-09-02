const playerSettings = (state = [], action) => {
  switch (action.type) {
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.volume,
      }
    default:
      return state;
  }
}
export default playerSettings;