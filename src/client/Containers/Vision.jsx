import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
    <div class="vision">
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
        <div class="vision-active">
          Vision
        </div>
        <div class="dora-inactive">
          DORA
        </div>
        <div class="team-inactive">
          Team
        </div>
        <div class="social-links-inactive">
          Social links
        </div>
      </div>
      <div class="about-content-vision">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
 volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero er
os et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum d
olor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut 
wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum
 dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
 wisi enim ad minim 
      </div>
      <div class="about-content-vision-quote">
      <div class="quote-container">
        <img src="double-quotes.svg">
      </div>
      <div class="quote-text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
 erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
      </div>
      </div>
    </div>
    )
  }
}

export default WelcomeContainer