import React from 'react';
import EventCard from './eventCard.jsx';

import '../styles/upcomingEvent.css';

export default class UpcomingEvent extends React.Component {
  render() {
    return (
        <div className="upcoming-events-container">
          <EventCard CalenderimagePath="calender-icon.svg" LocationImagePath="location-icon.svg"/>
          <EventCard CalenderimagePath="calender-icon.svg" LocationImagePath="location-icon.svg"/>
          <EventCard CalenderimagePath="calender-icon.svg" LocationImagePath="location-icon.svg"/>
        </div>
      );
  }
}
