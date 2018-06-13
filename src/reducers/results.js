const initialState = {
  search: {
    isLoading: false,
    query: "",
    result: [],
  }
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH' :
      return {
        ...state,
        search : {
          ...state.search,
          query: action.payload,
        }
      }
    case 'FETCHING_SEARCH':
      return {
        ...state,
        search : {
          ...state.search,
          isLoading: true,
          query: action.payload.name,
        }
      }
    case 'RECEIVED_SEARCH':
      return {
        ...state,
        search : {
          ...state.search,
          isLoading: false,
          result: action.payload,
        }
      }

    default:
      return state;
  }
}
export default results;
