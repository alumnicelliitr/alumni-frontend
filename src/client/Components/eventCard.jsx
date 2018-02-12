import React from 'react';
import '../styles/eventCard.css';

export default class EventCard extends React.Component {
  render() {
    return (
        <div className="events-container">
          <div className="event-name">
            Global Alumni Meet
          </div>
          <div className="event-date">
            <div className="calender-icon">
              <img src={`/static/images/${this.props.CalenderimagePath}`} />
            </div>
            <div className="calender-date">
              23 March 2018
            </div>
          </div>
          <div className="event-location">
            <div className="location-icon">
              <img src={`/static/images/${this.props.LocationImagePath}`} />
            </div>
            <div className="location-text">
              New Delhi
            </div>
          </div>
        </div>
      );
  }
}
