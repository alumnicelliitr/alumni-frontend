import React from 'react';
import '../styles/trendingNews.css';

export default class TrendingNews extends React.Component {
  componentDidMount(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });
  }

  render() {
    return (
      <div className="trending-news">
        <div className="carousel carousel-slider center" data-indicators="true">
          <div className="carousel-fixed-item center middle-indicator">
            <div className="left">
              <a className="movePrevCarousel middle-indicator-text waves-effect waves-light content-indicator"><i className="material-icons left  middle-indicator-text">chevron_left</i></a>
            </div>
            <div className="right">
              <a className=" moveNextCarousel middle-indicator-text waves-effect waves-light content-indicator"><i className="material-icons right middle-indicator-text">chevron_right</i></a>
            </div>
          </div>
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
