import React from 'react';
import '../styles/formerDeanCard.css';

export default class FormerDeanCard extends React.Component {
  render() {
    return (
        <div className="former-dean-card">
          <img src="/static/images/sample.jpg" className="former-dean-card-image"/>
          <div className="former-dean-card-content">
            <div className="dean-info">
              <div className="years-of-service">2018-20XX</div>
              <div className="dean-info-row">Name</div>
              <div className="dean-info-row">Department</div>
              <div className="dean-info-row">Contact No.</div>
              <div className="dean-info-row">Email</div>
            </div>
          </div>
        </div>
      );
  }
}
