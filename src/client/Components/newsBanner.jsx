import React from 'react';
import NewsCard from './newsCard.jsx';
import '../styles/newsBanner.css';

export default class NewsBanner extends React.Component {
  render() {
    return (
      <div className="news-banner-container container">
        <div className="news-banner-header">
          <h3 className="light-heading">News & Insight</h3>
          <div>
            <img className="menu-icon responsive" src="/static/images/menu.svg"/>
            View all articles
          </div>
        </div>
        <div className="news-card-container">
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </div>
      </div>
    );
  }
}
