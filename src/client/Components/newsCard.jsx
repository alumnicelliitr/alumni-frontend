import React from 'react';
import '../styles/newsCard.css';

export default class NewsCard extends React.Component {
  render() {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. a lacinia arcu.'
    return (
      <div className="news-card">
        <img className="news-card-image" src="/static/images/grey.jpg"/>
        <div className="news-card-content">
          {content}
          <span className="read-article">Read Article</span>
        </div>
      </div>
    );
  }
}
