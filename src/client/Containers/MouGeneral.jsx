import React from 'react'
import { Link } from 'react-router'

class MouGeneral extends React.Component {
  render() {
    return (
    <div className = "mou-general">
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
      <div className="separator">
        
      </div>
      <div className="empty-placeholder-main">
        
      </div>
      <div className="mou_general_search_bar">
        <div className="search_for_mous">
          <div className="search-for-mou-text">
          Search for MOUs
          </div>
        </div>
        <div className="search-options">
          <div className="college_dropdown">
          <div className="select-style">
            <select>
              <option value="Select College">Select College</option>
            </select>
          </div>
          </div>
          <div className="course_dropdown">
          <div className="select-style">
            <select>
              <option value="Select Course">Select Course</option>
            </select>
          </div>
          </div>
          <div className="go_button">
            
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MouGeneral