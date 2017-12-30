import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
    <div className="contactus">
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
	  	<div class="content-contact-us">
	  		<div class="contact-us-active">
	  			<div class="contact-us-active-heading">
	  				<div class="contact-us-active-heading-main">
	  					Contact
	  				</div>
	  				<div class="contact-us-active-heading-sub">
	  					Us
	  				</div>
	  			</div>
	  			<div class="contact-links">
	  				<div class="phone">
	  					<div class="contact-links-icon-1">
	  						<img src="phone-icon.svg">
	  					</div>
	  					<div class="contact-links-text-1">
	  						+91-XXX-XXXX-XXX
	  					</div>
	  				</div>
	  				<div class="email">
	  					<div class="contact-links-icon-2">
	  						<img src="email-icon.svg">
	  					</div>
	  					<div class="contact-links-text-2">
	  						iarc@gmail.com
	  					</div>
	  				</div>
	  				<div class="location">
	  					<div class="contact-links-icon-3">
	  						<img src="location-icon.svg">
	  					</div>
	  					<div class="contact-links-text-3">
	  						IIT Roorkee Campus
	  					</div>
	  				</div>
	  			</div>
	  			<div class="contact-follow-links">
	  				<div class="contact-follow-links-head">Follow us on:</div>
	  				<div class="contact-follow-links-content">
	  					<div class="contact-follow-links-icon-1">
	  					<img src="twitter-icon.svg">
	  					</div>
	  					<div class="contact-follow-links-icon-2">
	  					<img src="fb-icon.svg">
	  					</div>
	  					<div class="contact-follow-links-icon-3">
	  					<img src="linkedin-icon.svg">
	  					</div>
	  				</div>
	  			</div>
	  		</div>
	  		<div class="write-to-us-inactive">
	  			<div class="write-to-us-inactive-heading">
	  				<div class="write-to-us-inactive-heading-main">
	  					Write
	  				</div>
	  				<div class="write-to-us-inactive-heading-sub">
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