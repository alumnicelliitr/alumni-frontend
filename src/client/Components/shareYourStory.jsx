import React from 'react';
import PublicationCard from './publicationCard.jsx';
import '../styles/shareYourStory.css';
import { baseUrl } from '../config.js';
import Loader from './loader.jsx';

export default class ShareYourStory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded:false,
      data: {},
    }
  }
  componentDidMount(){
    let request = new Request(`${baseUrl}/api/website/shareYourStory/`,{
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
          ‘Share your Story’ is a communication channel between the students and the alumni that renders a platform to the alumni where they can share their success stories and other insightful experiences over a wide variety of topics. Alumni can speak about their professional life, personal experiences, life at the institute, involvement in academics, cultural and technical activities and some really interesting gossips while students can gain knowledge from their valuable experiences.
        </p>
        <div className="publication-card-container">
          {cards}
        </div>
      </div>
    );
  }
}
