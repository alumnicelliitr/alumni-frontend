import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (title: string) =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
    <script src="${STATIC_PATH}/script/script.js"></script>
  </head>
  <body>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle_hot.js"></script>
    <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle_client.js"></script>
  </body>
</html>
`

export default renderApp
