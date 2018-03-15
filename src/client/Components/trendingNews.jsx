import React from 'react';
import '../styles/trendingNews.css';

class TrendingNewsCard extends React.Component {
  render() {
    return (
      <a className="carousel-item carousel-links">
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
    let newsCards = this.state.data.map((news) => {
      return (<TrendingNewsCard image={news.image} title={news.title} />);
    });

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
