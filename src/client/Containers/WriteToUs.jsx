import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
  <div class="writetous">
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
    <div class="content-write-to-us">
    <div class="write-to-us-active">
      <div class="write-to-us-active-content">
        <div class="write-to-us-active-content-heading">
          <div class="write-to-us-active-content-heading-main">
            Write
          </div>
          <div class="write-to-us-active-content-heading-sub">
            To Us
          </div>
        </div>
        <div class="write-to-us-active-content-email-form">
          <div class="write-to-us-active-content-email-form-heading">
            Enter mail ID
          </div>
          <div class="write-to-us-active-content-email-form-content">
            <input type="text">
          </div>
        </div>
        <div class="write-to-us-active-content-comments-form">
          <div class="write-to-us-active-content-comments-form-heading">
            Add comments
          </div>
          <div class="write-to-us-active-content-comments-form-content">
            <input type="text">
          </div>
        </div>
        <button class="write-to-us-submit-button">
          Submit
        </button>
      </div>
    </div>
    <div class="contact-us-inactive">
      <div class="contact-us-inactive-heading">
        <div class="contact-us-inactive-heading-main">
          Contact
        </div>
        <div class="contact-us-inactive-heading-sub">
          Us
        </div>
      </div>
    </div>
    </div>
  </div>
    )
  }
}

export default WelcomeContainer