import React from 'react';
import PublicationCard from './publicationCard.jsx';
import '../styles/shareYourStory.css';
import { baseUrl } from '../config.js';

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
        <p className="publications-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        </p>
        <div className="publication-card-container">
          {cards}
        </div>
      </div>
    );
  }
}
