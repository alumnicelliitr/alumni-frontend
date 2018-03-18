import React from 'react';
import '../styles/loader.css';

export default class Loader extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loader"/>
      </div>
    );
  }
}
