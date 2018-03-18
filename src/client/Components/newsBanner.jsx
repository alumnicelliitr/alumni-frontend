import React from 'react';
import NewsCard from './newsCard.jsx';
import '../styles/newsBanner.css';

import { MEDIUM_RSS_URL, RSS_FEED_URL } from '../../shared/config'

export default class NewsBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    fetch(
      `${MEDIUM_RSS_URL}?rss_url=${RSS_FEED_URL}`,
    ).then((res) =>
       res.json()
    ).then((res) => {
      this.setState({
        data:res.items.slice(0,3),
      })
      })
  }

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
        {this.state.data.map(blog => (
          <NewsCard link={this.state.link} thumbnail={blog.thumbnail} desc={blog.description} title={blog.title}/>
        ))}
        </div>
      </div>
    );
  }
}
