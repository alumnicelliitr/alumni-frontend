import React from 'react';
import '../styles/publicationCard.css';

export default class PublicationCard extends React.Component {
  render() {
    return (
      <div className="publication-card">
        <img src={this.props.thumbnail} className="publication-card-image" onError={(e) => e.target.src = '/images/grey.jpg'}/>
        <div className="publication-card-content">
          <span className="heading">{this.props.title}</span>
        </div>
      </div>
    );
  }
}
