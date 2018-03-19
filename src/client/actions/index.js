import { recieveUser, logoutUser, } from './user_actions.js'

export const fetchUser = () => (dispatch) => {
  const url = new URL(location.href)
  const code = url.searchParams.get("code")
  if (code) {
    const request = new Request(`http://127.0.0.1:8999/api/core/login/?code=${code}`,{
      method: 'get',
    })
    fetch(request)
      .then(res => res.json())
      .then(res => {
        dispatch(recieveUser(res))
      })
  }
}

export const logout = () => dispatch => {

}

export const fetchEvent = () => (dispatch) => {


}