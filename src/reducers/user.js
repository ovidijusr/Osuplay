const initialState = {
  page: "login",
  data: {},
  modal: '',
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MODAL_VISIBILITY': {
      return {
        ...state,
        modal:action.payload,
      }
    }
    case 'SET_USER_DATA': {
      return {
        ...state,
        data: action.payload,
      }
    }
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
