import React from 'react';
import EventCard from './eventCard.jsx';

import '../styles/upcomingEvent.css';

export default class UpcomingEvent extends React.Component {
  render() {
    let events = this.props.upcoming.map((event) => {
      return (<EventCard CalenderimagePath="calender-icon.svg" LocationImagePath="location-icon.svg" title={event.title} date={event.end_date} venue={event.venue} id={event.id} />);
    });

    return (
        <div className="upcoming-events-container">
         {events}
        </div>
      );
  }
}
