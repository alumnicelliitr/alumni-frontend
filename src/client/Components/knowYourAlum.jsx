import React from 'react';
import PublicationCard from './publicationCard.jsx';
import '../styles/knowYourAlum.css';
import { createKYA, createSYS, fetchTaggedFromMedium } from '../actions'

export default class KnowYourAlum extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    knowYourAlum: [],
  }
}
  
  componentWillMount() {
    fetchTaggedFromMedium((knowYourAlum) => {
      this.setState({
        knowYourAlum,
      })
    },  'productivity')
  }

  renderPosts = () =>{ 
    let array = []
    array = this.state.knowYourAlum.map((post) => (
      <PublicationCard thumbnail={post.thumbnail || "/static/images/grey.jpg"} title={post.title}/>
    ))
    return array
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
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}
