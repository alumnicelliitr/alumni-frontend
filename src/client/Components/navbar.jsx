import React from 'react';
import { Link } from 'react-router';
import '../styles/navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/"><img src="/static/images/favicon.png" className="navbar-image"/></Link>
        <div className="navbar-container">
          <div className="navbar-links-container">
            <Link to="/about/vision" className="nav-links">About</Link>
            <Link to="/events/recent" className="nav-links">Events</Link>
            <Link to="/mou" className="nav-links">MOUs</Link>
            <Link to="/initiatives" className="nav-links">Initiatives</Link>
            <Link to="/awards" className="nav-links">Awards</Link>
            <Link to="/donate" className="nav-links">Donate</Link>
            <Link to="/contact" className="nav-links">Contact</Link>
          </div>
          <a className="loginbutton" href="https://channeli.in/oauth/client_id=7bad4b14038cda823f3c&redirect_url=alumni.iitr.ac.in/dashboard/">Login</a>
        </div>
      </div>
    );
  }
}
