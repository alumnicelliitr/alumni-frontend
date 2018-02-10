import React from 'react';
import '../styles/navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
                    <div className="navbar">
                      <div className="navbar-image"><img src=""/></div>
                      <div className="navbar-container">
                        <div className="navbar-links-container">
                          <a href="/about/vision" className="nav-links">About</a>
                          <a href="/events/recent" className="nav-links">Events</a>
                          <a href="/mou" className="nav-links">MOUs</a>
                          <a href="/initiatives" className="nav-links">Initiatives</a>
                          <a href="/awards" className="nav-links">Awards</a>
                          <a href="/donate" className="nav-links">Donate</a>
                          <a href="/contact" className="nav-links">Contact</a>
                        </div>
                        <div className="loginbutton">Login</div>
                      </div>
                    </div>
                );
    }
}
