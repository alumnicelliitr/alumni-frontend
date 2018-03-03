import React from 'react';
import '../styles/subscribeNewsletter.css';

export default class SubscribeNewsletter extends React.Component {
  render() {
    return (
      <div className="subscribe-newsletter">
        <div className="container">
          <h3 className="light-heading">Subscribe to our Newsletter</h3>
          <h5 className="newsletter-text light-heading">
            Get updated of institue activities through The Verband
          </h5>
          <div className="news-letter-form">
            <input type="email" className="browser-default"/>
            <a className="subscribe-button">Subscribe</a>
          </div>
        </div>
      </div>
    );
  }
}
