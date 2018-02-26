import React from 'react';
import DoraDetails from './doraDetails.jsx';
import MessageDora from './messageDora.jsx';
import FormerDeans from './formerDeans.jsx';

export default class Dora extends React.Component {
  render() {
    return (
        <div className="dora-container">
          <DoraDetails/>
          <MessageDora/>
          <FormerDeans/>
        </div>
      );
  }
}
