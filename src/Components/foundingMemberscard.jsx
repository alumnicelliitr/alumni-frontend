import React from 'react';
import '../styles/foundingMembersCard.css';

export default class FoundingMemberCard extends React.Component {
  render() {
    return (
        <div className="founding-members-card">
          <img src={this.props.image} className="founding-members-card-image" onError={(e) => e.target.src = '/images/grey.jpg'}/>
          <div className="founding-members-card-content">
            <div className="members-info">
              <div><a href={this.props.socials[0] || 'https://twitter.com/alumnicelliitr'}><img className="image" src="/images/twitter-icon.svg"/></a>{this.props.name}</div>
              <div><a href={this.props.socials[0] || 'https://twitter.com/alumnicelliitr'}><img className="image" src="/images/fb-icon.svg"/></a>{this.props.branch}</div>
            </div>
          </div>
        </div>
      );
  }
}
