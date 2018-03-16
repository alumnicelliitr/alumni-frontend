import React from 'react';
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import Tabs from '../Components/tabs.jsx';
import KnowYourAlum from '../Components/knowYourAlum.jsx';
import ShareYourStory from '../Components/shareYourStory.jsx';
import '../styles/publications.css';

export default class Publications extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab:0,
    };
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab
    });
  }

  render() {
    const tabs = [
      {lightHeading: 'Know your',darkHeading: 'Alum'},
      {lightHeading: 'Share your',darkHeading: 'Story'},
    ];

    const tabContent = [
      ( <div id="know-your-alum" className="publications-containers"><KnowYourAlum /></div> ),
      ( <div id="share-your-story" className="publications-containers"><ShareYourStory /></div> ),
    ];

    return (
      <div>
      <Navbar/>
      <div className="publications-container container">
        <div>
          <Tabs tabs={tabs} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
        </div>
        {tabContent[this.state.activeTab]}
      </div>
      <LandingFooter/>
      </div>
    );
  }
}
