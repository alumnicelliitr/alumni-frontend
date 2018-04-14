import React from 'react';
import '../styles/samp.css';

export default class SAMP extends React.Component {
  render() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. Pellentesque ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at.  Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.'
    return (
      <div className="samp-container container">
        <h2 className="light-heading">Student Alumni Mentorship Programme</h2>
        <div>
          <div className="samp-content">
            {content}
          </div>
          <img className="samp-image" src="/images/samp.png"/>
        </div>
        <a className="register-button" href="#">Register</a>
      </div>
    );
  }
}
