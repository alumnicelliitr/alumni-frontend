import React from 'react';
import EventCard from './eventCard.jsx';

import '../styles/recentEvent.css';

export default class RecentEvent extends React.Component {
  render() {
    let events = this.props.recent.map((event) => {
      return (<EventCard CalenderimagePath="calender-icon-red.svg" LocationImagePath="location-icon-red.svg" title={event.title} date={event.end_date} venue={event.venue} id={event.id}/>);
    });

    return (
        <div className="recent-events-container">
          {events}
        </div>
      );
  }
}
