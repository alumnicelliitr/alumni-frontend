import React from 'react'
import { Link } from 'react-router'

class WriteToUs extends React.Component {
  render() {
    return (
  <div className="writetous">
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
    <div className="separator">
      
    </div>
    <div className="content-write-to-us">
    <div className="write-to-us-active">
      <div className="write-to-us-active-content">
        <div className="write-to-us-active-content-heading">
          <div className="write-to-us-active-content-heading-main">
            Write
          </div>
          <div className="write-to-us-active-content-heading-sub">
            To Us
          </div>
        </div>
        <div className="write-to-us-active-content-email-form">
          <div className="write-to-us-active-content-email-form-heading">
            Enter mail ID
          </div>
          <div className="write-to-us-active-content-email-form-content">
            <input type="text" />
          </div>
        </div>
        <div className="write-to-us-active-content-comments-form">
          <div className="write-to-us-active-content-comments-form-heading">
            Add comments
          </div>
          <div className="write-to-us-active-content-comments-form-content">
            <input type="text" />
          </div>
        </div>
        <button className="write-to-us-submit-button">
          Submit
        </button>
      </div>
    </div>
    <div className="contact-us-inactive">
      <div className="contact-us-inactive-heading">
        <div className="contact-us-inactive-heading-main">
          Contact
        </div>
        <div className="contact-us-inactive-heading-sub">
          Us
        </div>
      </div>
    </div>
    </div>
  </div>
    )
  }
}

export default WriteToUs