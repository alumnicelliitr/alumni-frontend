/**
 * Authenticate user - set token in Local Storage
 *
 */
export const authenticateUser = (token) => {
    window.localStorage.setItem('token', token)
  }
  
  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  export const isUserAuthenticated = () => window.localStorage.getItem('token') !== null && window.localStorage.getItem('token') !== ''
  
  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  export const deauthenticateUser = () => {
    window.localStorage.removeItem('token')
  }
  
  /**
   * Get a token value.
   *
   * @returns {string}
   */
  export const getToken = () => window.localStorage.getItem('token')

  export const getPK = () => btoa(window.localStorage.getItem('pk'))
  