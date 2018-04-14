import React from 'react';
import FormerDeanCard from './formerDeanCards.jsx';
import '../styles/formerDeans.css';

export default class FormerDeans extends React.Component {
  render() {
    return (
        <div className="container">
          <h3 className="light-heading">Former<br/><span className="dark-subheading">Deans</span></h3>
          <div className="former-dean-card-container container">
            <FormerDeanCard/>
            <FormerDeanCard/>
            <FormerDeanCard/>
          </div>
        </div>
      );
  }
}
