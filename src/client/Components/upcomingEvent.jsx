import React from 'react';
import EventCard from './eventCard.jsx';

import '../styles/upcomingEvent.css';

export default class UpcomingEvent extends React.Component {
  render() {
    let events = this.props.upcoming.map((event) => {
      return (<EventCard CalenderimagePath="calender-icon-red.svg" LocationImagePath="location-icon-red.svg" title={event.title} date={event.end_date} venue={event.venue}/>);
    });

    return (
        <div className="upcoming-events-container">
         {events}
        </div>
      );
  }
}
