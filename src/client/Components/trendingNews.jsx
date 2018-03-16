import React from 'react';
import '../styles/trendingNews.css';

class TrendingNewsCard extends React.Component {
  render() {
    return (
      <a className="carousel-item carousel-links center">
        <img src={this.props.image}/>
        <div className="image-heading"><h1>{this.props.title}</h1></div>
      </a>
    );
  }
}

TrendingNewsCard.defaultProps = {
  image: '/static/images/grey.jpg'
};

export default class TrendingNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

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
    let request = new Request('https://institute-alumni-relation-cell.herokuapp.com/api/website/headlines/',{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        isLoaded: true,
        data:res,
      });
    });
  }

  render() {
    let newsCards;
    if(this.state.isLoaded) {
      newsCards = this.state.data.map((news, index) => {
        return (<TrendingNewsCard image={news.image} title={news.title} key={index}/>);
      });
    }

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
          {newsCards}
        </div>
      </div>
    );
  }
}
