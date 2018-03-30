import React from 'react';
import '../styles/newsCard.css';

export default class NewsCard extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="news-card">
          <img className="news-card-image" src={this.props.thumbnail} onError={(e) => e.target.src = '/static/images/grey.jpg'}/>
          <div className="news-card-content" >
            {this.props.title}
          <span className="read-article" >Read Article</span>
          </div>
        </div>
      </a>
    );
  }
}
