import { browserHistory } from 'react-router'

import { fetchAPI, fetchAPIGET } from './fetchAPI'
import { recieveUser, logoutUser } from './user_actions'

import { API_DOMAIN, IMG_OAUTH_REDIRECT } from '../../shared/config'

export const ImgOauthRedirect = () => {  
  window.location.href = IMG_OAUTH_REDIRECT
}

export const fetchUser = code => (dispatch) => {
  fetch(`${API_DOMAIN}api/core/login/?code=${code}`)
    .then(response =>
      [response.json(), response.status],
    ).then(([res, status]) => {
      if (status === 202) {
        res.then((json) => {
          const { user, token } = json
          window.localStorage.setItem('token', token)
          dispatch(recieveUser(user))
          setTimeout(() => {
          }, 1000)
        })
      } else {
      // Handle Not authorised.
      }
    }).catch((err) => {
      throw new Error(err)
    })
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(logoutUser())
  browserHistory.push('/')
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