const initialState = {
  page: "login",
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
      }
    default:
      return state;
  }
}

export default auth;
