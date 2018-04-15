import React from 'react';
import RecentEvent from '../Components/recentEvent.jsx';
import UpcomingEvent from '../Components/upcomingEvent.jsx';
import '../styles/eventsContainer.css';

export default class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }
  onClick(e) {
    this.setState({
      activeTab: e.currentTarget.getAttribute("data-key"),
    });
  }

  render() {
    const tabs = [(<UpcomingEvent upcoming={this.props.events.upcoming}/>), (<RecentEvent recent={this.props.events.past} />)];
    return (
      <div>
        <div className="events-tab-container">
          <div className={`events-tab ${this.state.activeTab== 0 ? 'active-upcoming-tab' : ''}`} onClick={(e) => this.onClick(e)} data-key="0">Upcoming Events</div>
          <div className={`events-tab ${this.state.activeTab== 1 ? 'active-recent-tab' : ''}`} onClick={(e) => this.onClick(e)} data-key="1">Recent Events</div>
        </div>
        <div className="events-content">
          {tabs[this.state.activeTab]}
        </div>
      </div>
    );
  }
}
