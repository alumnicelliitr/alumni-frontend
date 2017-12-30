import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
<div class="knowyouralum">
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
      <div class="know-your-alum-active">
        <div class="know-your-alum-active-heading">
          <div class="know-your-alum-active-heading-main">
            Know your
          </div>
          <div class="know-your-alum-active-heading-sub">
            Alum
          </div>
        </div>
        <div class="know-your-alum-content">
          <div class="know-your-alum-content-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo
lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
          </div>
          <div class="know-your-alum-content-card">
            <div class="card-row-1">
              <div class="card-1">
                <div class="card-placeholder">
                  
                </div>
                <div class="card-text">
                  <div class="card-text-head">
                    Lorem Ipsum
                  </div>
                  <div class="card-text-sub">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tncidunt ut laoreet dolore magna aliquam erat 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="share-story-inactive">
        <div class="share-story-inactive-heading">
          <div class="share-story-inactive-heading-main">
            Share Your
          </div>
          <div class="share-story-inactive-heading-sub">
            Story
          </div>
        </div>
      </div>
</div>
    )
  }
}

export default WelcomeContainer