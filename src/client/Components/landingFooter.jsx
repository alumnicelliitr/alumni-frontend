import React from 'react';
import '../styles/landingFooter.css';

export default class LandingFooter extends React.Component {
  render() {
    return (
      <div className="landing-footer container">
        <div className="links-list">
          <a className="heading-link" href="#">Home</a>
          <a className="heading-link" href="#">About Us</a>
          <a className="heading-link" href="#">Student Affairs</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Initiatives</a>
          <a className="subheading-link" href="#">SAMP</a>
          <a className="subheading-link" href="#">COR</a>
          <a className="subheading-link" href="#">Video Repository</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Blogs</a>
          <a className="subheading-link" href="#">Know Your Alum</a>
          <a className="subheading-link" href="#">Share Your Story</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Events</a>
          <a className="subheading-link" href="#">Golden Jubliee</a>
          <a className="subheading-link" href="#">Silver Jubliee</a>
          <a className="subheading-link" href="#">Ruby Jubliee</a>
          <a className="subheading-link" href="#">Alumni Meets</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Contact</a>
          <a className="subheading-link" href="#">Address</a>
          <a className="subheading-link" href="#">Number</a>
          <a className="subheading-link" href="#">Email</a>
          <a className="subheading-link" href="#">Follow Us On</a>
          <div className="follow-icons">
            <a href="https://twitter.com/alumnicelliitr"><img src="/static/images/twitter-dark.svg" className="follow-icon"/></a>
            <a href="https://www.facebook.com/alumnicelliitr/"><img src="/static/images/fb-dark.svg" className="follow-icon"/></a>
            <a href="https://www.linkedin.com/company/iarciitr"><img src="/static/images/in-dark.svg" className="follow-icon"/></a>
            <a href="https://www.youtube.com/channel/UCodyYSNBkcFMrZbOUZ0qlBw"><img src="/static/images/youtube-dark.svg" className="follow-icon"/></a>
          </div>
        </div>
      </div>
    );
  }
}
