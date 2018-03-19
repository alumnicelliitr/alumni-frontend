import { fetchAPI, fetchAPIGET } from './fetchAPI'
import { recieveUser, logoutUser, } from './user_actions.js'

import { API_DOMAIN } from '../../shared/config'

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

export const createAlumniCard = data => (dispatch) => {
  fetchAPI(`${API_DOMAIN}api/wesbite/alumni_card/create`, 'POST', data, (response, status) => {
    console.log('yo')
    // do somthing with the response
  })
}

export const fetchUserDetails = () => (dispatch) => {
  fetchAPIGET(`${API_DOMAIN}api/core/userdetails`, (response, status) => {
    // dipatch event with the response
  })
}

// export const updateUserDetails = (data) => (dispatch) => {
//   fetchAPI(/*Route*/, 'POST', data, (response, status) => {

//     // do somthing with the response
//   })
// }