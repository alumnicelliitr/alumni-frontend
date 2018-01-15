import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="homepage">
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
      
        <div className="trendingNews">
          <div className="newsHead">Trending News Will Come Here</div>
          <div className="newsTag">Trending News Tagline(if any)</div>
        </div>
     
    </div>
    )
  }
}

export default WelcomeContainer
