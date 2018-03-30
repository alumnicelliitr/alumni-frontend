import React from 'react';
import '../styles/liveStreaming.css';

export default class LiveStreaming extends React.Component {
  render() {
    return (
        <div className="live-streaming-container container">
          <h3 className="light-heading">Live Streaming</h3>
          <div className="live-streaming-content">
          Live streaming is the comprehensive coverage and the live broadcast of events of IARC such as guest lectures, award ceremonies, seminars, alumni meets, etc. on our website enabling a larger audience to connect with us and experience these events. Live streaming provides an exclusive opportunity to be a part of the events by a few clicks on the website without any travel and wastage of time.
          </div>
          <a className="live-button" href="#">Watch</a>
        </div>
      );
  }
}
