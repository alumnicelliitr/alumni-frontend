import React from 'react';
import '../styles/MOU.css';

export default class MOU extends React.Component {
  render() {
    return (
      <div className="mou-container container">
        <div className="mou-content">
          <h3 className="light-heading">Memorandam of<br/><span className="dark-subheading">Understanding</span></h3>
          See our MOUs
          <a className="view-button" href="#">View</a>
        </div>
        <div className="image-outer">
          <img className="image-inner" src="/static/images/mou.png"/>
        </div>
      </div>
    );
  }
}
