const initialState = {
  playlistState: {
    name: 'queue',
    key: 0,
  },
  lists : {
    queue: [],
  }
}

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_PLAYLIST': {
      const newList = {...state};
      newList.lists[action.payload.key].push(action.payload.data);
      return newList;
    }
    case 'SET_SONG': {
      const newList = {...state};
      newList.lists[action.payload.key].push(action.payload.data);
      newList.playlistState.key = newList.lists[action.payload.key].length - 1
      return newList;
    }
    case 'PREVIOUS_SONG': {
      return {
        ...state,
        playlistState: {
          ...state.playlistState,
          key: state.playlistState.key === 0 ? 0 : state.playlistState.key - 1,
        }
      }
    }
    case 'NEXT_SONG': {
      let newKey;
      if (state.lists[state.playlistState.name].length === state.playlistState.key) {
        newKey = 0;
      } else {
        newKey = state.playlistState.key + 1;
      }

      return {
        ...state,
        playlistState: {
          ...state.playlistState,
          key: newKey,
        }
      }
    }
    default:
      return state;
  }
}

export default playlist;
