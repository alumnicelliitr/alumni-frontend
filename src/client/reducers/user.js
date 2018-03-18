const initialState = {
  isLoggedIn: false,
  user: {},
};

export default function user(state = initialState, action) {
  const { data } = action;

  switch(action.type) {
    case 'RECIEVE_USER': {
      return {
        isLoggedIn: true,
        user: data,
      }
    }
    case 'LOGOUT_USER': {
      return {
        isLoggedIn: false,
        user: {}
      }
    }
    default: {
      return state
    }
  }
}
