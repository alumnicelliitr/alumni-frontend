import React from 'react';
import '../styles/messageDora.css';

export default class MessageDora extends React.Component {
  render() {
    return (
        <div className="message-dora">
          <div className="container">
            <div className="message-dora-container">
              <div className="message-dora-content">
                <h3 className="light-heading">Messsage from<br/><span className="dark-subheading">DORA</span></h3>
                <div className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. Pellentesque ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at. Phasellus ullamcorper nibh nec vehicula volutpat. Donec lacinia sagittis lectus, maximus malesuada metus auctor in. Donec gravida dui odio, suscipit dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.</div>
              </div>
              <iframe className="message-video" src="https://www.youtube.com/embed/VeSApPYcCBM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      );
  }
}
