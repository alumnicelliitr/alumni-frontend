import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import VisionTab from '../Components/vision.jsx';
import Dora from '../Components/dora.jsx';
import Team from '../Components/team.jsx';
import SocialLinks from '../Components/socialLinks.jsx';
import Tabs from '../Components/tabs.jsx';
import LandingFooter from '../Components/landingFooter.jsx';

import '../styles/about.css';

class Vision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab
    });
  }

  render() {
    const tabs = [
      {lightHeading: '',darkHeading: 'Vision'},
      {lightHeading: '',darkHeading: 'DORA'},
      {lightHeading: '',darkHeading: 'Team'},
      {lightHeading: '',darkHeading: 'Social Links'}
    ];

    const tabContent = [
      ( <div id="vision" className="about-containers"><VisionTab/></div> ),
      ( <div id="dora" className="about-containers"><Dora/></div> ),
      ( <div id="team" className="about-containers"><Team/></div> ),
      ( <div id="social" className="about-containers"><SocialLinks/></div> )
    ];
    return (
      <div>
        <Navbar/>
          <div className="about-content">
            <div className="row">
              <div className="container">
                <Tabs tabs={tabs} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
              </div>
              {tabContent[this.state.activeTab]}
            </div>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}

export default Vision
