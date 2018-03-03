import React from 'react';
import '../styles/trendingNews.css';

export default class TrendingNews extends React.Component {
  componentDidMount(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

  render() {
    return (
      <div className="trending-news">
        <div className="carousel carousel-slider center" data-indicators="true">
          <a className="carousel-item carousel-links" href="#one!">
            <img src="/static/images/grey.jpg"/>
            <div className="image-heading"><h1>Some News</h1><h2>Tagline</h2></div>
          </a>
          <a className="carousel-item" href="#two!"><img src="/static/images/grey.jpg"/></a>
          <a className="carousel-item" href="#three!"><img src="/static/images/grey.jpg"/></a>
          <a className="carousel-item" href="#four!"><img src="/static/images/grey.jpg"/></a>
        </div>
      </div>
    );
  }
}
