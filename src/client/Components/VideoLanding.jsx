import React from 'react';
import '../styles/videoLanding.css';

export default class VideoLanding extends React.Component {
  render() {
    const content = 'Video Repository is a source for students to envision the possibilities for their own vocational goals, and to collect wisdom from the more experienced personalities who are willing to share their knowledge.Under this initiative, any alumnus can share his/her experiences and knowledge through a small informal interview or talk and send us a video of the same. These videos will be posted regularly on the facebook page and the website of IARC.'
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
