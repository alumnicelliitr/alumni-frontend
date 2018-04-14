import React from 'react';

import '../styles/contactUs.css';
export default class ContactUs extends React.Component {
  render(){
    return (
      <div className="contactus-container container">
        <div className="contact-card">
            <div className="contact-links">
              <div className="contact-row">
                <img src="/images/contact-header.svg" />
                <div>
                  DORA
                </div>
              </div>
              <div className="phone contact-row">
                <img src="/images/phone-icon.svg" />
                <div className="contact-links-text-1">
                  +91-XXX-XXXX-XXX
                </div>
              </div>
              <div className="email contact-row">
                <img src="/images/email-icon.svg" />
                <a className="contact-links-text-2" href="mailto:iarc@gmail.com">
                  iarc@gmail.com
                </a>
              </div>
              <div className="location contact-row">
                <img src="/images/location-icon.svg" />
                <div className="contact-links-text-3">
                  IIT Roorkee Campus
                </div>
              </div>
            </div>
            <div className="contact-follow-links">
              <div className="contact-follow-links-head">Follow us on:</div>
              <div className="contact-follow-links-container">
                <a href="https://www.linkedin.com/company/iarciitr/"><img src="/images/linkedin-icon.svg"/></a>
                <a href="https://www.facebook.com/alumnicelliitr/"><img src="/images/fb-icon.svg"/></a>
                <a href="https://twitter.com/alumnicelliitr"><img src="/images/twitter-icon.svg"/></a>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-links">
              <div className="contact-row">
                <img src="/images/contact-header.svg" />
                <div>
                  IARC
                </div>
              </div>
              <div className="phone contact-row">
                <img src="/images/phone-icon.svg" />
                <div className="contact-links-text-1">
                  +91-XXX-XXXX-XXX
                </div>
              </div>
              <div className="email contact-row">
                <img src="/images/email-icon.svg" />
                <a className="contact-links-text-2" href="mailto:iarc@gmail.com">
                  iarc@gmail.com
                </a>
              </div>
              <div className="location contact-row">
                <img src="/images/location-icon.svg" />
                <div className="contact-links-text-3">
                  IIT Roorkee Campus
                </div>
              </div>
            </div>
            <div className="contact-follow-links">
              <div className="contact-follow-links-head">Follow us on:</div>
              <div className="contact-follow-links-container">
                <a href="https://www.linkedin.com/company/iarciitr/"><img src="/images/linkedin-icon.svg"/></a>
                <a href="https://www.facebook.com/alumnicelliitr/"><img src="/images/fb-icon.svg"/></a>
                <a href="https://twitter.com/alumnicelliitr"><img src="/images/twitter-icon.svg"/></a>
              </div>
            </div>
          </div>

        </div>
      );
  }
}
