import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import RecentEvent from '../Components/recentEvent.jsx';
import UpcomingEvent from '../Components/upcomingEvent.jsx';

import '../styles/events.css';

class RecentEvents extends React.Component {
  render() {
    return (
    	<div className="recentevents">
    		<Navbar/>
        <div className="content-recent-events container">
          <div className="row">
            <div className="tabs-list-container">
              <div className="col s8 container">
                <ul className="tabs tab-menu">
                  <li className="tab col s6 "><a href="#upcoming" className="grey-text tab-link">Upcoming <br/>Events</a></li>
                  <li className="tab col s6"><a href="#recent" className="grey-text tab-link">Recent<br/>Events</a></li>
                </ul>
              </div>
            </div>
            <div id="upcoming" className="events-containers"><UpcomingEvent/></div>
            <div id="recent" className="events-containers"><RecentEvent/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentEvents
