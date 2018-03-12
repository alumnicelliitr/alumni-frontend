import React from 'react';
import '../styles/videoRepository.css';

class VideoRepositoryCard extends React.Component{
  render() {
    return (
      <div className="video-repo-card">
        <h3 className="light-heading">{this.props.lightHeading}<br/><span className="dark-subheading">{this.props.darkHeading}</span></h3>
        <div className="video-repo-card-content">{this.props.content}</div>
      </div>
      );
  }
}

export default class VideoRepository extends React.Component {
  render() {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. Pellentesque ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at. Phasellus ullamcorper nibh nec vehicula volutpat. Donec lacinia sagittis lectus, maximus malesuada metus auctor in. Donec gravida dui odio, suscipit dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.";
    return (
        <div className="initiative-blue-banner">
          <div className="container">
            <div className="initiative-banner-content-container">
              <VideoRepositoryCard lightHeading="Video" darkHeading="Repository" content={content}/>
              <VideoRepositoryCard lightHeading="Lecture" darkHeading="Series" content={content}/>
            </div>
            <div className="video-repo-iframe-container container">
              <img className="video-repo-image" src="/static/images/imac-template.png"/>
              <iframe className="video-repo-iframe" src="https://www.youtube.com/embed/VeSApPYcCBM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <h3 className="light-heading" style={{"textAlign":"center"}}>See more of these at our Youtube channel</h3>
            <a className="youtube-button" href="https://www.youtube.com/channel/UCodyYSNBkcFMrZbOUZ0qlBw">YouTube channel</a>
          </div>
        </div>
      );
  }
}
