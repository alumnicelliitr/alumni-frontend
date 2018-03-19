import Base from '../Components/Pages/Base';

import WelcomeContainer from '../Containers/WelcomeContainer';
import NotFoundContainer from '../Containers/NotFoundContainer';
import Vision from '../Containers/Vision';
import Dora from '../Containers/Dora';
import Team from '../Containers/Team';
import SocialLinks from '../Containers/SocialLinks';
import UpcomingEvents from '../Containers/UpcomingEvents';
import RecentEvents from '../Containers/RecentEvents';
import Initiatives from '../Containers/Initiatives';
import Alum from '../Containers/Alum';
import Story from '../Containers/Story';
import Donate from '../Containers/Donate';
import ContactUs from '../Containers/ContactUs';
import Contact from '../Containers/WriteToUs';
import Awards from '../Containers/awards.jsx';
import AboutEvent from '../Containers/aboutEvent.jsx';
import Publications from '../Containers/publications.jsx';
import MOU from '../Containers/MOU.jsx';
import AlumniDashboard from '../Containers/DashboardContainer/'
import UserWrapper from '../Containers/UserWrapper'
import * as rC from './routeConstants';

const routes = {
  component: Base,
  childRoutes: [
    {
      path: rC.WELCOME_ROUTE,
      component: WelcomeContainer,
    },
    {
      path: rC.VISION_ROUTE,
      component: Vision,
    },
    {
      path: rC.DORA_ROUTE,
      component: Dora,
    },
    {
      path: rC.TEAM_ROUTE,
      component: Team,
    },
    {
      path: rC.SOCIAL_LINKS_ROUTE,
      component: SocialLinks,
    },
    {
      path: rC.UPCOMING_EVENTS_ROUTE,
      component: UpcomingEvents,
    },
    {
      path: rC.RECENT_EVENTS_ROUTE,
      component: RecentEvents,
    },
    {
      path: rC.INITIATIVES_ROUTE,
      component: Initiatives,
    },
    {
      path: rC.ALUM_ROUTE,
      component: Alum,
    },
    {
      path: rC.STORY_ROUTE,
      component: Story,
    },
    {
      path: rC.DONATE_ROUTE,
      component: Donate,
    },
    {
      path: rC.CONTACT_US_ROUTE,
      component: Contact,
    },
    {
      path: rC.AWARDS_ROUTE,
      component: Awards,
    },
    {
      path: rC.ABOUT_EVENT_ROUTE,
      component: AboutEvent,
    },
    {
      path: rC.PUBLICATIONS,
      component: Publications,
    },
    {
      path: rC.MOU_ROUTE,
      component: MOU,
      // Add authorisation wrapper
    },
    {
      path: rC.ALUM_DASHBOARD_ROUTE,
      component: AlumniDashboard,
    },
    {
      path: rC.ABOUT_EVENT_ROUTE,
      component: AboutEvent,
    },
    {
      path: rC.PUBLICATIONS,
      component: Publications,

    },
    {
      path: '/dashboard',
      component: UserWrapper,
      childRoutes: [
        {
          path: '/dashboard/alumni',
          component: AlumniDashboard,
        },
      ],
    },
    {
      path: '*',
      component: NotFoundContainer,
    },
  ],
}

export default routes
