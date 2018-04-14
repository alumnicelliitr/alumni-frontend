import React from 'react';
import '../styles/mouCard.css';

export default class MOUCard extends React.Component {
  render() {
    return (
        <div className="mou-card">
          <div>
            <h3 className="light-heading">{this.props.lightHeading}<br/><span className="dark-subheading">{this.props.darkHeading}</span></h3>
            <div className="mou-card-content">{this.props.content}</div>
          </div>
          <img src="/images/grey.jpg" className="mou-card-image"/>
        </div>
      );
  }
}
