
import React from 'react'
import '../styles/trendingNews.css'
import { MEDIUM_RSS_URL, RSS_FEED_URL, API_DOMAIN } from '../../shared/config'

export default class TrendingNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: [],
    }
    this.initializeCarousel = this.initializeCarousel.bind(this)
  }


  componentWillMount() {
    const request = new Request(`${API_DOMAIN}api/website/headlines/`, {
      method: 'get',
    })
    fetch(`${MEDIUM_RSS_URL}?rss_url=${RSS_FEED_URL}`)
      .then(res => res.json())
      .then((res) => {    
        this.setState({
          data: res.items,
        })
      })
    fetch(request)
      .then(res => res.json())
      .then((res) => {   
        const { data } =  this.state
        this.setState({
          isLoaded: true,
          data: [...data, ...res],
        })
      })
  }
  
  componentDidMount() {
    // $('.carousel').carousel()
    this.initializeCarousel()
    $('.movePrevCarousel').click((e) => {
      e.preventDefault()
      e.stopPropagation()
      $('.carousel').carousel('prev')
    })
    
    $('.moveNextCarousel').click((e) => {
      e.preventDefault()
      e.stopPropagation()
      $('.carousel').carousel('next')
    })
  }

  initializeCarousel() {
    const slider = $('.carousel')
    slider.carousel()
    this.state.data.forEach((news) => {
      if (news.id) {
        slider.append(`<a class="carousel-item carousel-links">
        <img class="image" src=${news.image} alt=${news.title}/>
        <div class="image-heading"><h1>${news.title}</h1></div>
      </a>`)
      } else {
        slider.append(`<a class="carousel-item carousel-links">
        <img class="image" src=${news.thumbnail} alt=${news.title}/>
        <div class="image-heading"><h1>${news.title}</h1></div>
      </a>`)
      }
    })
    this.reinitializeCarousel()
  }

  reinitializeCarousel() {
    $('.carousel').carousel('destroy')
    $('.carousel').carousel() 
  }

  render() {
    this.reinitializeCarousel()
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
          {this.initializeCarousel()}
          {this.reinitializeCarousel()}
        </div>
      </div>
    )
  }
}
