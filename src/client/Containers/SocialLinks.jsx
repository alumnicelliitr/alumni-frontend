import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
    <div class = "sociallinks">
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
      <div class="about-section-headings" id="vision">
        <div class="vision-inactive">
          Vision
        </div>
        <div class="dora-inactive">
          DORA
        </div>
        <div class="team-inactive">
          Team
        </div>
        <div class="social-links-active">
          Social links
        </div>
      </div>
      <div class="links-container">
        <a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</a>
      </div>
    </div>