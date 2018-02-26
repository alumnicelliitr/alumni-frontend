import React from 'react';
import '../styles/liveStreaming.css';

export default class LiveStreaming extends React.Component {
  render() {
    return (
        <div className="live-streaming-container container">
          <h3 className="light-heading">Live Streaming</h3>
          <div className="live-streaming-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. Pellentesque ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at. Phasellus ullamcorper nibh nec vehicula volutpat. Donec lacinia sagittis lectus, maximus malesuada metus auctor in. Donec gravida dui odio, suscipit dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.
          </div>
          <a className="live-button" href="#">Watch</a>
        </div>
      );
  }
}
