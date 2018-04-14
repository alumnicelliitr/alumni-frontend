import React from 'react'
import { Link } from 'react-router'

class ContactUs extends React.Component {
  render() {
    return (
    <div className="contactus">
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
	  	<div className="content-contact-us">
	  		<div className="contact-us-active">
	  			<div className="contact-us-active-heading">
	  				<div className="contact-us-active-heading-main">
	  					Contact
	  				</div>
	  				<div className="contact-us-active-heading-sub">
	  					Us
	  				</div>
	  			</div>
	  			<div className="contact-links">
	  				<div className="phone">
	  					<div className="contact-links-icon-1">
	  						<img src="phone-icon.svg" />
	  					</div>
	  					<div className="contact-links-text-1">
	  						+91-XXX-XXXX-XXX
	  					</div>
	  				</div>
	  				<div className="email">
	  					<div className="contact-links-icon-2">
	  						<img src="email-icon.svg" />
	  					</div>
	  					<div className="contact-links-text-2">
	  						iarc@gmail.com
	  					</div>
	  				</div>
	  				<div className="location">
	  					<div className="contact-links-icon-3">
	  						<img src="location-icon.svg" />
	  					</div>
	  					<div className="contact-links-text-3">
	  						IIT Roorkee Campus
	  					</div>
	  				</div>
	  			</div>
	  			<div className="contact-follow-links">
	  				<div className="contact-follow-links-head">Follow us on:</div>
	  				<div className="contact-follow-links-content">
	  					<div className="contact-follow-links-icon-1">
	  					<img src="twitter-icon.svg" />
	  					</div>
	  					<div className="contact-follow-links-icon-2">
	  					<img src="fb-icon.svg" />
	  					</div>
	  					<div className="contact-follow-links-icon-3">
	  					<img src="linkedin-icon.svg" />
	  					</div>
	  				</div>
	  			</div>
	  		</div>
	  		<div className="write-to-us-inactive">
	  			<div className="write-to-us-inactive-heading">
	  				<div className="write-to-us-inactive-heading-main">
	  					Write
	  				</div>
	  				<div className="write-to-us-inactive-heading-sub">
	  					To Us
	  				</div>
	  			</div>
	  		</div>
	  	</div>
	</div>
	)
  }
}

export default ContactUs