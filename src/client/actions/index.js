import { browserHistory } from 'react-router'
import axios from 'axios'

import { fetchAPI, fetchAPIGET } from './fetchAPI'
import { getPK, getToken } from '../../shared/Auth'
import { recieveUser, logoutUser } from './user_actions'
import { IMG_OAUTH_REDIRECT, MEDIUM_RSS_URL, RSS_FEED_URL, API_DOMAIN  } from '../../shared/config'

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
          user.isAlumni = true
          if(user.alum === null) {
            user.isAlumni = false
          }
          window.localStorage.setItem('pk', atob(user.enr_no))
          console.log(user, recieveUser, 'logged In...')

          dispatch(recieveUser(user))
          setTimeout(() => {
            window.location.href = '/user/dashboard'
          }, 1000)
        })
      } else {
        window.location.href = '/'
      }
    }).catch((err) => {
      throw new Error(err)
    })
}

export const logoutUserfromAPI = () => (dispatch) => {
  fetchAPIGET(`${API_DOMAIN}api/core/logout`, (response, status) => {
    console.log(response)
    localStorage.clear()
    dispatch(logoutUser())
    setTimeout(() => {
      window.location.href = '/'
    }, 1000)
    // browserHistory.push('/')
  })
}

export const fetchEvent = () => (dispatch) => {


}



export const fetchUserDetails = () => (dispatch) => {
  fetchAPIGET(`${API_DOMAIN}api/core/user/detail/${getPK()}`, (response, status) => {
    response.isAlumni = true
    if(response.alum === null) {
      response.isAlumni = false
    }
    dispatch(recieveUser(response))
  })
}

// export const updateUserDetails = (data) => (dispatch) => {
//   fetchAPI(/*Route*/, 'POST', data, (response, status) => {

//     // do somthing with the response
//   })
// }

const headers = {
  'Authorization': `Token ${getToken()}`,
  'Content-Type': 'multipart/form-data'
}

export const createKYA = data => {
  axios({
    method: 'post',
    url: `${API_DOMAIN}api/website/knowYourAlum/create`,
    headers,
    data,
  }).then((response) => {
  }).catch((err) => {
  })
  console.log(data);
}

export const createSYS = data => {
  axios({
    method: 'post',
    url: `${API_DOMAIN}api/website/shareYourStory/create`,
    headers,
    data,
  }).then((response) => {
  }).catch((err) => {
  })
  console.log(data);
}

export const createAlumniCard = (data, cb) => {
  axios({
    method: 'post',
    url: `${API_DOMAIN}api/website/alumni_card/register`,
    headers,
    data,
  }).then((response) => {
    cb(response.status === 201, response.data)
  }).catch((err) => {
    console.log(err);
    Materialize.toast(err.response.message, 2000)
  })
  console.log(data);
}

export const checkAlumniCard = (cb) => {
  fetchAPIGET(`${API_DOMAIN}api/website/alumni_card`, (json, status) => {
    cb(status === 200, json)
  })
}

const header1 = {
  'Authorization': `Token ${getToken()}`,
  // 'Content-Type': ``
}

export const registerDistinguishedAlumniCard = (data, cb) => {
  console.log(data);
  
  axios({
    method: 'post',
    url: `${API_DOMAIN}api/core/nominate/`,
    headers: header1,
    data,
  }).then((response) => {
    Materialize.toast('Successfully Nominated', 2000)
    cb(response.status === 201, response.data)
  }).catch((err) => {
    console.error(err);
    Materialize.toast("Something doesn't seem right", 2000)
  })
  console.log(data);
}

// Store the medium data in the store
export const fetchTaggedFromMedium = (cb, tag) => {
  fetch(
    `${MEDIUM_RSS_URL}?rss_url=${RSS_FEED_URL}/tagged/${tag}`,
  ).then((res) =>
     res.json()
  ).then((res) => {
    cb(res.items)
    })
}