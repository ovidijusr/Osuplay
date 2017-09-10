const initialState = {
  search: {
    isLoading: false,
    query: "",
    results: [],
  }
};

const results = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_SEARCH':
      return {
        ...state,
        isLoading: true,
      }
    case 'RECEIVED_SEARCH':
      return {
        ...state,
        isLoading: false,
        results: action.payload,
      }

    default:
      return state;
  }
}
export default results;