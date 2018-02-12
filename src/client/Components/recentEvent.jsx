import React from 'react';
import EventCard from './eventCard.jsx';

import '../styles/recentEvent.css';

export default class RecentEvent extends React.Component {
  render() {
    return (
        <div className="recent-events-container">
          <EventCard CalenderimagePath="calender-icon-red.svg" LocationImagePath="location-icon-red.svg"/>
          <EventCard CalenderimagePath="calender-icon-red.svg" LocationImagePath="location-icon-red.svg"/>
          <EventCard CalenderimagePath="calender-icon-red.svg" LocationImagePath="location-icon-red.svg"/>
        </div>
      );
  }
}
