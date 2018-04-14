import React from 'react';
import '../styles/socialLinks.css';

export default class SocialLinks extends React.Component {
  render() {
    return (
        <div className="sociallinks-container container">
          <a href="https://www.linkedin.com/company/iarciitr/"><img src="/images/linkedin-icon.svg"/></a>
          <a href="https://www.facebook.com/alumnicelliitr/"><img src="/images/fb-icon.svg"/></a>
          <a href="https://twitter.com/alumnicelliitr"><img src="/images/twitter-icon.svg"/></a>
        </div>
      );
  }
}
