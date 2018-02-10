import React from 'react';
import '../styles/currentMembersCard.css';

export default class CurrentMemberCard extends React.Component {
  render() {
    return (
        <div className="current-members-card">
          <img src="/static/images/sample.jpg" className="current-members-card-image"/>
          <div className="current-members-card-content">
            <div className="members-info">
              <div><div className="list-bullet"/>Name</div>
              <div><div className="list-bullet"/>Batch</div>
              <div><div className="list-bullet"/>Branch</div>
            </div>
            <div className="vertical-seperator"/>
          </div>
        </div>
      );
  }
}
