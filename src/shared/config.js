export const WEB_PORT = process.env.PORT || 8000
export const STATIC_PATH = '/static'
export const APP_NAME = 'Alumni Network IITR'

export const WDS_PORT = 7000

export const APP_CONTAINER_CLASS = 'root'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`

export const CLIENT_ID = '7bad4b14038cda823f3c'

// provide an array to img
export const REDIRECT_URL = 'alumni.iitr.ac.in/dashboard/'

export const MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json'
export const RSS_FEED_URL = 'https://medium.com/feed/personal-growth'
// export const RSS_FEED_URL = 'https://medium.com/feed/institute-alumni-relations-cell-iit-roorkee'

// export const API_DOMAIN = 'https://institute-alumni-relation-cell.herokuapp.com/'
export const API_DOMAIN = 'http://localhost:1337/'


export const IMG_OAUTH_REDIRECT = `http://people.iitr.ernet.in/oauth/?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}`
