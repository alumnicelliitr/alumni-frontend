import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../styles/navbar.css'

import { ImgOauthRedirect, logoutUserfromAPI } from '../actions/'
import { isUserAuthenticated } from '../../shared/Auth'

class Navbar extends React.Component {
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
            <Link to="/publications" className="nav-links">Publications</Link>
            <Link to="/donate" className="nav-links">Donate</Link>
            <Link to="/contact" className="nav-links">Contact</Link>
          </div>
          {!isUserAuthenticated() ? (
            <a className="loginbutton" onClick={ImgOauthRedirect}>Login</a>
          ):(
            <a className="loginbutton" onClick={this.props.logoutUserfromAPI}>Logout</a>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  logoutUserfromAPI: bindActionCreators(logoutUserfromAPI, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)