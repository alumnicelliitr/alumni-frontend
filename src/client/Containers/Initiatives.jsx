import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import InitiativeCard from '../Components/initiativeCard.jsx';
import VideoRepository from '../Components/videoRepository.jsx';
import LiveStreaming from '../Components/liveStreaming.jsx';
import LandingFooter from '../Components/landingFooter.jsx';

import '../styles/initiatives.css';

class Initiatives extends React.Component {
  render() {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. Pellentesque ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at. Phasellus ullamcorper nibh nec vehicula volutpat. Donec lacinia sagittis lectus, maximus malesuada metus auctor in. Donec gravida dui odio, suscipit dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.";
    const WebinarContent = 'Another means of facilitating communication between the students and the alumni are Webinars - the Web Seminars. Webinars allow the institute alumni to conduct comprehensive online interactive sessions and talks on a variety of subjects with the students of IITR. Webinars are a beneficial live interaction medium as they bring attention to the successful alumni who can effectively guide the students with their expertise and answer their queries in the real time.';
    return (
    	<div>
        <Navbar/>
        <div className="initiatives-container">
          <InitiativeCard lightHeading="Student Alumni" darkHeading="Mentorship Program" content={content}/>
          <InitiativeCard lightHeading="Connect on" darkHeading="Request" content={content}/>
          <VideoRepository/>
          <InitiativeCard darkHeading="Webinars" content={WebinarContent}/>
          <LiveStreaming/>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}

export default Initiatives;
