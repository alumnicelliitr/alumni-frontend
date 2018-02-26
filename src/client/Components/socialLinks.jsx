import React from 'react';
import '../styles/socialLinks.css';

export default class SocialLinks extends React.Component {
  render() {
    return (
        <div className="sociallinks-container container">
          <img src="/static/images/linkedin-icon.svg"/>
          <img src="/static/images/fb-icon.svg"/>
          <img src="/static/images/twitter-icon.svg"/>
        </div>
      );
  }
}
