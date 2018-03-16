import React from 'react';
import '../styles/publicationCard.css';

export default class PublicationCard extends React.Component {
  render() {
    return (
      <div className="publication-card">
        <img src="/static/images/grey.jpg" className="publication-card-image"/>
        <div className="publication-card-content">
          Some Content
        </div>
      </div>
    );
  }
}
