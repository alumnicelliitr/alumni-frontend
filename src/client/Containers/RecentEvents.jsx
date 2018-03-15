import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import EventContainer from '../Components/EventContainer.jsx';
import Tabs from '../Components/tabs.jsx';
import LandingFooter from '../Components/landingFooter.jsx';

import '../styles/events.css';

class RecentEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    let request = new Request('https://institute-alumni-relation-cell.herokuapp.com/api/website/events/',{
      method:'get',
    });
    fetch(recentRequest)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        activeTab: this.state.activeTab,
        isLoaded: true,
        data: res,
      });
    });
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab
    });
  }

  render() {
    const events = [{lightHeading:'Alumni',darkHeading: 'Meets'},{lightHeading:'Guest',darkHeading: 'Lecture'},{lightHeading:'Re-',darkHeading: 'Union'}];

    return (
    	<div className="recentevents">
    		<Navbar/>
        <div className="content-recent-events container">
          <div className="row">
            <Tabs tabs={events} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
            <EventContainer events={this.state.data.Golden}/>
          </div>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}

export default RecentEvents
