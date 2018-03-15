import React from 'react';
import '../styles/currentMembersCard.css';

export default class CurrentMemberCard extends React.Component {
  render() {
    return (
        <div className="current-members-card">
          <img src={this.props.image} className="current-members-card-image"/>
          <div className="current-members-card-content">
            <div className="members-info">
              <div><div className="list-bullet"/>{this.props.name}</div>
              <div><div className="list-bullet"/>{this.props.batch}</div>
              <div><div className="list-bullet"/>{this.props.branch}</div>
            </div>
            <div className="vertical-seperator"/>
          </div>
        </div>
      );
  }
}
