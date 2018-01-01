import React from 'react'
import { Link } from 'react-router'

class UpcomingEvents extends React.Component {
  render() {
    return (
    <div className="upcomingevents">
    <div className="navbar">
          <div className="loginbutton">Login</div>
            <div className="links-div">
          <div className="nav-links"><a href="#about">About</a></div>
              <div className="nav-links"><a href="#events">Events</a></div>
                <div className="nav-links"><a href="#mou">MOUs</a></div>
                <div className="nav-links"><a href="#initiatives">Initiatives</a></div>
                <div className="nav-links"><a href="#awards">Awards</a></div>
                <div className="nav-links"><a href="#donate">Donate</a></div>
                <div className="nav-links"><a href="#contact">Contact</a></div>
          </div>
      </div>
    <div className="separator"></div>
    <div className="content-upcoming-events">
    <div className="content-upcoming-events-active">
      <div className="upcoming-events-heading">
        <div className="upcoming-events-heading-main">
          Upcoming
        </div>
        <div className="upcoming-events-heading-sub">
          Events
        </div>
      </div>
      <div className="upcoming-events-content-box">
        <div className="event-name">
          Global Alumni Meet
        </div>
        <div className="event-date">
          <div className="calender-icon">
            <img src="calender-icon.svg" />
          </div>
          <div className="calender-date">
            23 March 2018
          </div>
        </div>
        <div className="event-location">
          <div className="location-icon">
            <img src="location-event.svg" />
          </div>
          <div className="location-text">
            New Delhi
          </div>
        </div>
      </div>
    </div>
    <div className="content-recent-events-inactive">
      <div className="recent-events-inactive-heading">
        <div className="recent-events-inactive-heading-main">
          Recent
        </div>
        <div className="recent-events-inactive-heading-sub">
          Events
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
}

export default UpcomingEvents