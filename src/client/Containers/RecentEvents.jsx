import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';

class RecentEvents extends React.Component {
  render() {
    return (
    	<div className="recentevents">
    		<Navbar/>
      <div className="separator">

      </div>
      <div className="content-recent-events">
        <div className="upcoming-events-inactive">
          <div className="upcoming-events-inactive-heading">
            <div className="upcoming-events-inactive-heading-main">
              Upcoming
            </div>
            <div className="upcoming-events-inactive-heading-sub">
              Events
            </div>
          </div>
        </div>
        <div className="recent-events-active">
          <div className="recent-events-active-heading">
            <div className="recent-events-active-heading-main">
              Recent
            </div>
            <div className="recent-events-active-heading-sub">
              Events
            </div>
          </div>
          <div className="recent-events-active-content">
            <div className="event-name">
              Global Alumni Meet
            </div>
            <div className="event-date">
              <div className="calender-icon">
                <img src="calender-icon-red.svg" />
              </div>
              <div className="calender-date">
                23 March 2018
              </div>
            </div>
            <div className="event-location">
              <div className="location-icon">
                <img src="location-icon-red.svg" />
              </div>
              <div className="location-text">
                New Delhi
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default RecentEvents
