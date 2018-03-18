import React from 'react';
import PublicationCard from './publicationCard.jsx';
import '../styles/knowYourAlum.css';

export default class KnowYourAlum extends React.Component {
  render() {
    return (
      <div>
        <p className="publications-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
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
