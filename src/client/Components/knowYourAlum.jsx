import React from 'react';
import PublicationCard from './publicationCard.jsx';
import '../styles/knowYourAlum.css';

export default class KnowYourAlum extends React.Component {
  render() {
    return (
      <div>
        <p className="publications-description">
          IIT Roorkee has several affluent, influential and recognised alumni working in various sectors around the globe. The foundation of a strong and connected alumni network is the acquaintance with one's alumni. The ‘Know your Alum’ initiative of IARC works towards this cause and aims to bridge the gap between the students and the alumni by providing students an opportunity to know the eminent alumni of the institute and communicate with them.
        </p>
        <div className="publication-card-container">
          <PublicationCard thumbnail="/static/images/grey.jpg" title="some title"/>
          <PublicationCard thumbnail="/static/images/grey.jpg" title="some title"/>
          <PublicationCard thumbnail="/static/images/grey.jpg" title="some title"/>
          <PublicationCard thumbnail="/static/images/grey.jpg" title="some title"/>
        </div>
      </div>
    );
  }
}
