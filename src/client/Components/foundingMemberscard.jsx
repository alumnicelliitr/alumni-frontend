import React from 'react';
import '../styles/foundingMembersCard.css';

export default class FoundingMemberCard extends React.Component {
  render() {
    return (
        <div className="founding-members-card">
          <img src="/static/images/sample.jpg" className="founding-members-card-image"/>
          <div className="founding-members-card-content">
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
