import React from 'react'
import { Link } from 'react-router'

class SocialLinks extends React.Component {
  render() {
    return (
    <div className = "sociallinks">
    <div className="navbar">
          <div className="loginbutton">Login</div>
            <div className="links-div">
              <div className="nav-links"><a href="about/vision">About</a></div>
                <div className="nav-links"><a href="/events/recent">Events</a></div>
                <div className="nav-links"><a href="/mou">MOUs</a></div>
                <div className="nav-links"><a href="/initiatives">Initiatives</a></div>
                <div className="nav-links"><a href="/awards">Awards</a></div>
                <div className="nav-links"><a href="/donate">Donate</a></div>
                <div className="nav-links"><a href="/contact">Contact</a></div>
          </div>
      </div>
      <div className="separator">
        
      </div>
      <div className="about-section-headings" id="vision">
        <div className="vision-inactive">
          Vision
        </div>
        <div className="dora-inactive">
          DORA
        </div>
        <div className="team-inactive">
          Team
        </div>
        <div className="social-links-active">
          Social links
        </div>
      </div>
      <div className="links-container">
        <a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</a>
      </div>
    </div>
    )
  }
}

export default SocialLinks