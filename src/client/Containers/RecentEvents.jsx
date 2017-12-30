import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
    	<div className="recentevents">
    		<div class="navbar">
          <div class="loginbutton">Login</div>
            <div class="links-div">
          <div class="nav-links"><a href="#about">About</a></div>
              <div class="nav-links"><a href="#events">Events</a></div>
                <div class="nav-links"><a href="#mou">MOUs</a></div>
                <div class="nav-links"><a href="#initiatives">Initiatives</a></div>
                <div class="nav-links"><a href="#awards">Awards</a></div>
                <div class="nav-links"><a href="#donate">Donate</a></div>
                <div class="nav-links"><a href="#contact">Contact</a></div>
          </div>
      </div>
      <div class="separator">
        
      </div>
      <div class="content-recent-events">
        <div class="upcoming-events-inactive">
          <div class="upcoming-events-inactive-heading">
            <div class="upcoming-events-inactive-heading-main">
              Upcoming
            </div>
            <div class="upcoming-events-inactive-heading-sub">
              Events
            </div>
          </div>
        </div>
        <div class="recent-events-active">
          <div class="recent-events-active-heading">
            <div class="recent-events-active-heading-main">
              Recent
            </div>
            <div class="recent-events-active-heading-sub">
              Events
            </div>
          </div>
          <div class="recent-events-active-content">
            <div class="event-name">
              Global Alumni Meet
            </div>
            <div class="event-date">
              <div class="calender-icon">
                <img src="calender-icon-red.svg">
              </div>
            <div class="calender-date">
              23 March 2018
            </div>
          </div>
          <div class="event-location">
            <div class="location-icon">
              <img src="location-icon-red.svg">
            </div>
            <div class="location-text">
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

export default WelcomeContainer