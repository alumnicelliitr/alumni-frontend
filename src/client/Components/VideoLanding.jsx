import React from 'react';
import '../styles/videoLanding.css';

export default class VideoLanding extends React.Component {
  render() {
    const content = 'Lorem ipsum dolor sit amet, consect ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at. Phasellus ullamcorper nibh nec vehicula volutpat. Donec lacinia sagittis lectus, maximus malesuada metus auctor in. Donec gravida dui odio, suscipit dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.'
    return (
      <div>
        <div className="video-landing-container">
          <div className="container">
            <div className="iframe-container">
              <img className="video-image" src="/static/images/imac-template.png"/>
              <iframe className="iframe-video" src="https://www.youtube.com/embed/VeSApPYcCBM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="video-content">
              <h3 className="light-heading">Video<br/><span className="dark-subheading">Repository</span></h3>
              <p>{content}</p>
            </div>
          </div>
        </div>
        <div className="more-video">
          <div className="container">
            <div className="more-content">
              <h4 className="light-heading">More of Video Repository</h4>
              <span>Visit our YouTube Channel</span>
              <a className="youtube-landing-button" href="https://www.youtube.com/channel/UCodyYSNBkcFMrZbOUZ0qlBw">YouTube channel</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
