import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import EventContainer from '../Components/EventContainer.jsx';
import Tabs from '../Components/tabs.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import Loader from '../Components/loader.jsx';

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

  componentWillMount() {
    let request = new Request('https://institute-alumni-relation-cell.herokuapp.com/api/website/events/',{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      
      this.setState({
        isLoaded: true,
        data: res,
      });
    });
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab,
      isLoaded: this.state.isLoaded,
      data: this.state.data,
    });
  }
  render() {
    const eventTabs = this.state.data.map((obj) => { return { lightHeading:Object.keys(obj)[0].split(' ')[0], darkHeading: Object.keys(obj)[0].split(' ')[1], all: Object.keys(obj)[0]} })

    let eventContent;
    if(this.state.isLoaded){
      eventContent = (<EventContainer events={this.state.data[this.state.activeTab][eventTabs[this.state.activeTab].all]}/>);
    }

    return (
    	<div className="recentevents">
    		{ !this.state.isLoaded ? (<Loader/>) : ''}
        <Navbar/>
        <div className="content-recent-events container">
          <div className="row">
            <Tabs tabs={eventTabs} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
            {eventContent}
          </div>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}

export default RecentEvents
