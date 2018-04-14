import React from 'react';
import '../styles/currentMembersCard.css';

export default class CurrentMemberCard extends React.Component {
  render() {
    return (
        <div className="current-members-card">
          <img src={this.props.image} className="current-members-card-image" onError={(e) => e.target.src = '/images/grey.jpg'}/>
          <div className="current-members-card-content">
            <div className="member-role">{this.props.team.role}</div>
            <div className="members-info">
              <div><a href={this.props.socials[0] || 'https://twitter.com/alumnicelliitr'}><img className="image" src="/images/twitter-icon.svg"/></a>{this.props.name}</div>
              <div><a href={this.props.socials[0] || 'https://twitter.com/alumnicelliitr'}><img className="image" src="/images/fb-icon.svg"/></a>{this.props.branch}</div>
            </div>
          </div>
        </div>
      );
  }
}
