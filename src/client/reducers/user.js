import initialState from './initialState'

const user = (state = initialState.user, action) => {
  console.log(action, state, action.user)
  switch (action.type) {
    case 'RECEIVE_USER':
      return Object.assign({}, state, action.user)
    case 'LOGOUT_USER':
      return Object.assign({}, {})
    default:
      return state
  }
}

export default user
