import React from 'react';
import '../styles/trendingNews.css';
import { MEDIUM_RSS_URL, RSS_FEED_URL, API_DOMAIN } from '../config';
import $ from 'jquery'
import Flickity from 'flickity';
import CircularLoader from '../Components/CircularLoader'

export default class TrendingNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: [{
        title: 'IARC',
        thumbnail: '/images/grey.jpg'
      }],
    }
  }


  componentWillMount() {
    const request = new Request(`${API_DOMAIN}api/website/headlines/`, {
      method: 'get',
    })
    fetch(`${MEDIUM_RSS_URL}?rss_url=${RSS_FEED_URL}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          isLoaded: true,
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
    this.flkty = new Flickity( '.main-carousel', {
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: true,
      });
  }

  render() {
    if (this.state.isLoaded) {
      this.flkty.destroy();
      this.flkty = new Flickity( '.main-carousel', {
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: true,
      });
      var $cells = $('.carousel-cell');
      this.flkty.remove($cells);
      this.state.data.forEach((slide) => {
        const $cellElems = $(`<div class="carousel-cell">
            <a href="${slide.guid}">
            <img class="carousel-image" src=${slide.thumbnail.includes('https://cdn-images') ? slide.thumbnail : '/images/grey.jpg'} >
            <h4 class="carousel-heading">${slide.title}</h4>
            </a>
          </div>`);
        this.flkty.append($cellElems);
      });
    }
    return (
      <div className="trending-news">
        <div className="main-carousel">
        <div className="carousel-cell">
            <img className="carousel-image" src="/images/grey.jpg" />
            <h4 className="carousel-heading">IARC</h4>
          </div>
        </div>
      </div>
    );
  }
}
