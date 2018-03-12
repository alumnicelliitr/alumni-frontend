import React from 'react';

import '../styles/awardsCard.css';

export default class AwardsCard extends React.Component {
  render() {
    return (
      <div className="awards-card-container">
        <div className="awards-card">
          <h3 className="dark-subheading">{this.props.title}</h3>
          <p className="awards-card-content">{this.props.content}</p>
        </div>
        <img className="awards-image" src="/static/images/grey.jpg" />
      </div>
    );
  }
}
