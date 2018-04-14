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
    const VideoRepocontent = 'Video Repository is a source for students to envision the possibilities for their own vocational goals, and to collect wisdom from the more experienced personalities who are willing to share their knowledge.Under this initiative, any alumnus can share his/her experiences and knowledge through a small informal interview or talk and send us a video of the same. These videos will be posted regularly on the facebook page and the website of IARC.';
    return (
        <div className="initiative-blue-banner">
          <div className="container">
            <div className="initiative-banner-content-container">
              <VideoRepositoryCard lightHeading="Video" darkHeading="Repository" content={VideoRepocontent}/>
              <VideoRepositoryCard lightHeading="Lecture" darkHeading="Series" content={VideoRepocontent}/>
            </div>
            <div className="video-repo-iframe-container container">
              <img className="video-repo-image" src="/images/imac-template.png"/>
              <iframe className="video-repo-iframe" src="https://www.youtube.com/embed/VeSApPYcCBM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <h3 className="light-heading" style={{"textAlign":"center"}}>See more of these at our Youtube channel</h3>
            <a className="youtube-button" href="https://www.youtube.com/channel/UCodyYSNBkcFMrZbOUZ0qlBw">YouTube channel</a>
          </div>
        </div>
      );
  }
}
