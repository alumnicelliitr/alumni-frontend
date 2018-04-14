import 'whatwg-fetch'

import { getToken } from '../auth'

let statusToSend = true

const headers = {
  Authorization: `Token ${getToken()}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function handleErrors(response) {
  // let status = true
  if (!response.ok) {
    if (response.status === 401) {
      window.location.pathname = '/'
    } else if (response.status === 403) {
      window.location.pathname = '/'
    }
    //   } else if (response.status === 404) {
    //     status = false
    //   } else if (response.status === 500) {
    //     console.log(response.statusText)
    //     status = false
    //   }
  }
  return [response.json(), response.status]
}

export const fetchAPIGET = (route, callback) => {
  fetch(route, {
    method: 'GET',
    headers,
  }).then(handleErrors).then((response) => {
    const status = response[1]
    response[0].then((responseJSON) => {
      callback(responseJSON, status)
    })
  }).catch((err) => {
    throw new Error(err)
  })
}

export const fetchAPI = (route, method, data, callback) => {
  fetch(route, {
    method,
    headers,
    body: data,
  }).then((response) => {
    statusToSend = response.status
    return response.json()
  }).then((responseJSON) => {
    callback(responseJSON, statusToSend)
  }).catch((err) => {
    throw new Error(err)
  })
}

export const fetchAPIDELETE = (route, callback) => {
  fetch(route, {
    method: 'DELETE',
    headers,
  }).then((response) => {
    if (response.status === 204) {
      callback(true)
    } else {
      callback(false)
    }
  }).catch((err) => {
    throw new Error(err)
  })
}
