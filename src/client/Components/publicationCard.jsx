import React from 'react';
import '../styles/publicationCard.css';

export default class PublicationCard extends React.Component {
  render() {
    return (
      <div className="publication-card">
        <img src={this.props.thumbnail} className="publication-card-image"/>
        <div className="publication-card-content">
          {this.props.title}
        </div>
      </div>
    );
  }
}
