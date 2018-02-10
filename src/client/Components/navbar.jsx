import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
                  <div className="navbar">
                    <div className="loginbutton">Login</div>
                    <div className="links-div">
                      <div className="nav-links"><a href="about/vision">About</a></div>
                      <div className="nav-links"><a href="/events/recent">Events</a></div>
                      <div className="nav-links"><a href="/mou">MOUs</a></div>
                      <div className="nav-links"><a href="/initiatives">Initiatives</a></div>
                      <div className="nav-links"><a href="/awards">Awards</a></div>
                      <div className="nav-links"><a href="/donate">Donate</a></div>
                      <div className="nav-links"><a href="/contact">Contact</a></div>
                    </div>
                  </div>
                );
    }
}
