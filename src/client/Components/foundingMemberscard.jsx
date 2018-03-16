import React from 'react';
import '../styles/foundingMembersCard.css';

export default class FoundingMemberCard extends React.Component {
  render() {
    return (
        <div className="founding-members-card">
          <img src={this.props.image} className="founding-members-card-image"/>
          <div className="founding-members-card-content">
            <div className="members-info">
              <div><div className="list-bullet"/>{this.props.name}</div>
              {/*<div><div className="list-bullet"/>{this.props.batch}</div>*/}
              <div><div className="list-bullet"/>{this.props.branch}</div>
            </div>
            <div className="vertical-seperator"/>
          </div>
        </div>
      );
  }
}
