import React from 'react';
import AwardsCard from '../Components/awardsCard.jsx';
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';

import '../styles/awards.css';

export default class Awards extends React.Component {
  render() {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, p dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.";
    const cardsContent = [
      {
        title: 'Encore Awards',
        content: content
      },
      {
        title: 'Heritage Awards',
        content: content
      },
      {
        title: 'Ram Kumar Prize',
        content: content
      },
      {
        title: 'Manoj Jain Award',
        content: content
      },
      {
        title: 'Celebrating Life Awards',
        content: content
      },

    ];
    const cards = cardsContent.map((card,index) => {
      return (
        <AwardsCard title={card.title} content={card.content} key={index} />
      );
    });
    return (
      <div>
        <Navbar />
        <div className="awards-container">
          <div className="container">
            {cards}
          </div>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}
