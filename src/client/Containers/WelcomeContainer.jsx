import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="navbar">
        	 <div className="loginbutton">Login</div>
  			   <a href="#contact">Contact</a>
  			   <a href="#donate">Donate</a>
  			   <a href="#awards">Awards</a>
  			   <a href="#initiatives">Initiatives</a>
  			   <a href="#mou">MOUs</a>
  			   <a href="#events">Events</a>
  			   <a href="#about">About</a>
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
