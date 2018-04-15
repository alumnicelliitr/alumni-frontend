import Base from '../Components/Pages/Base'

import WelcomeContainer from '../Containers/WelcomeContainer'
import NotFoundContainer from '../Containers/NotFoundContainer'

import * as rC from './routeConstants'

const routes = {
  component: Base,
  childRoutes: [
    {
      path: rC.WELCOME_ROUTE,
      component: WelcomeContainer,
    },
    {
      path: '*',
      component: NotFoundContainer,
    },
  ],
}

export default routes
