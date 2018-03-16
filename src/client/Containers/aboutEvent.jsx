import React from 'react';
import Navbar from '../Components/navbar.jsx';
import EventCard from '../Components/eventCard.jsx';
import { baseUrl } from '../config.js';
import LandingFooter from '../Components/landingFooter.jsx';
import '../styles/aboutEvent.css';

export default class AboutEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded:false,
      data: {},
    }
  }
  componentDidMount(){
    const id = this.props.params.id;
    let request = new Request(`${baseUrl}/api/website/event/${id}/`,{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        activeTab: this.state.activeTab,
        isLoaded: true,
        data: res,
      });
    });
  }
  render() {
    let gallery;
    if (this.state.isLoaded && this.state.data.images.length > 0) {
      gallery = (
        <div>
          <div className="gallery-heading">Gallery:</div>
          <img className="event-image" src={this.state.data.images[0].pic}/>
        </div>
      );
    }
    let content;
    if (this.state.isLoaded){
      content = (
        <div className="about-event-container container">
          <EventCard CalenderimagePath="calender-icon-red.svg" LocationImagePath="location-icon-red.svg" title={this.state.data.title} date={this.state.data.end_date} venue={this.state.data.venue} id={this.state.data.id}/>
          <p className="event-description">
            {this.state.data.content}
          </p>
          {gallery}
        </div>
      );
    }
    return (
      <div>
        <Navbar/>
        {content}
        <LandingFooter/>
      </div>
    );
  }
}
