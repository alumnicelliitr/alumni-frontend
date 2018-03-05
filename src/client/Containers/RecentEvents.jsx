import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import RecentEvent from '../Components/recentEvent.jsx';
import UpcomingEvent from '../Components/upcomingEvent.jsx';
import Tabs from '../Components/tabs.jsx';

import '../styles/events.css';

class RecentEvents extends React.Component {
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
    const events = [{lightHeading:'Upcoming',darkHeading: 'Event'},{lightHeading:'Recent',darkHeading: 'Event'}];

    const tabContent = [
      (<div id="upcoming" className="events-containers"><UpcomingEvent/></div>),
      (<div id="recent" className="events-containers"><RecentEvent/></div>)
    ];

    return (
    	<div className="recentevents">
    		<Navbar/>
        <div className="content-recent-events container">
          <div className="row">
            <Tabs tabs={events} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
            {tabContent[this.state.activeTab]}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentEvents
