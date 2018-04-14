import React from 'react';
import { Link } from 'react-router';
import '../styles/eventCard.css';

export default class EventCard extends React.Component {
  render() {
    return (
        <div className="events-container">
          <div className="event-name">
            <Link to={`/event/${this.props.id}`}>
            {this.props.title}
            </Link>
          </div>
          <div className="event-date">
            <div className="calender-icon">
              <img src={`/images/${this.props.CalenderimagePath}`} />
            </div>
            <div className="calender-date">
              {this.props.date.substr(0,10)}
            </div>
          </div>
          <div className="event-location">
            <div className="location-icon">
              <img src={`/images/${this.props.LocationImagePath}`} />
            </div>
            <div className="location-text">
              {this.props.venue}
            </div>
          </div>
        </div>
      );
  }
}
