import React from 'react';
import '../styles/initiativeCard.css';

export default class InitiativeCard extends React.Component {
  render() {
    return (
        <div className="container initiative-card-container">
          <div className="row initiative-card">
            <div className="col s7">
              <h3 className="light-heading">{this.props.lightHeading}<br/><span className="dark-subheading">{this.props.darkHeading}</span></h3>
              <div className="initiative-card-content">{this.props.content}</div>
            </div>
            <img src="/static/images/sample.jpg" className="circle responsive-img col s5"/>
          </div>
        </div>
      );
  }
}
