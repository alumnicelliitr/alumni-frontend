import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
	<div class="navbar">
	<div class="loginbutton">Login</div>
  	<a href="#contact">Contact</a>
  	<a href="#donate">Donate</a>
  	<a href="#awards">Awards</a>
  	<a href="#initiatives">Initiatives</a>
  	<a href="#mou">MOUs</a>
  	<a href="#events">Events</a>
 	<a href="#about">About</a>
    </div>
    )
  }
}

export default WelcomeContainer