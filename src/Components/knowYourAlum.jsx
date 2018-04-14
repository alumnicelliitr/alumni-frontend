import React from 'react';
import PublicationCard from './publicationCard.jsx';
import '../styles/knowYourAlum.css';
import { baseUrl } from '../config.js';

import Loader from './loader.jsx';

export default class KnowYourAlum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded:false,
      data: {},
    }
  }
  componentDidMount(){
    let request = new Request(`${baseUrl}/api/website/knowYourAlum/`,{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        isLoaded: true,
        data: res,
      });
    });
  }
  render() {
    let cards;
    if (this.state.isLoaded){
      cards = this.state.data.map((card,index) => {
        return (
          <PublicationCard {...card}/>
        );
      });
    }

    return (
      <div>
        { !this.state.isLoaded ? (<Loader/>) : ''}
        <p className="publications-description">
          IIT Roorkee has several affluent, influential and recognised alumni working in various sectors around the globe. The foundation of a strong and connected alumni network is the acquaintance with one's alumni. The ‘Know your Alum’ initiative of IARC works towards this cause and aims to bridge the gap between the students and the alumni by providing students an opportunity to know the eminent alumni of the institute and communicate with them.
        </p>
        <div className="publication-card-container">
          {cards}
        </div>
      </div>
    );
  }
}
