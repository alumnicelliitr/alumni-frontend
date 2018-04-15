
import React from 'react';
import Carousel from 'nuka-carousel';
import '../styles/trendingNews.css';
import { MEDIUM_RSS_URL, RSS_FEED_URL, API_DOMAIN } from '../../shared/config';

import CircularLoader from '../Components/CircularLoader'

export default class TrendingNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      data: [{
        title: 'IARC',
        thumbnail: '/static/images/grey.jpg'
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
    $('.main-carousel').flickity({
      cellAlign: 'left',
      wrapAround: true,
      autoPlay: true,
    });
  }

  render() {
    if (this.state.isLoaded) {
      this.state.data.forEach((slide) => {
        const $cellElems = $(`<div class="carousel-cell">
            <a href="${slide.guid}">
            <img class="carousel-image" src=${slide.thumbnail.includes('https://cdn-images') ? slide.thumbnail : '/static/images/grey.jpg'} >
            <h4 class="carousel-heading">${slide.title}</h4>
            </a>
          </div>`);
        $('.main-carousel').flickity( 'append', $cellElems );
      });
    }
    return (
      <div className="trending-news">
        <div className="main-carousel">
        <div class="carousel-cell">
            <img class="carousel-image" src="/static/images/grey.jpg" />
            <h4 class="carousel-heading">IARC</h4>
          </div>
        </div>
      </div>
    );
  }
}
