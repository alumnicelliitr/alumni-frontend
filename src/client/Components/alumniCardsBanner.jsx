import React from 'react';
import '../styles/alumniCardsBanner.css';

export default class AlumniCardsBanner extends React.Component {
  render() {
    return (
      <div className="alumni-card-banner-container">
        <div className="container">
          <h3 className="light-heading">Alumni<br/><span className="dark-subheading">Cards</span></h3>
          <span className="content-text">Don't have? Register yourself</span>
          <a className="register-alumni-card-button" href="#">Register</a>
        </div>
      </div>
    );
  }
}
