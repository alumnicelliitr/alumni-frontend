export const recieveUser = user => ({
  type: 'RECEIVE_USER',
  user,
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
})
