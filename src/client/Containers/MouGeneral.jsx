import React from 'react'
import { Link } from 'react-router'

class WelcomeContainer extends React.Component {
  render() {
    return (
    <div className = "mou-general">
    <div class="navbar">
          <div class="loginbutton">Login</div>
            <div class="links-div">
                <div class="nav-links"><a href="#about">About</a></div>
                <div class="nav-links"><a href="#events">Events</a></div>
                <div class="nav-links"><a href="#mou">MOUs</a></div>
                <div class="nav-links"><a href="#initiatives">Initiatives</a></div>
                <div class="nav-links"><a href="#awards">Awards</a></div>
                <div class="nav-links"><a href="#donate">Donate</a></div>
                <div class="nav-links"><a href="#contact">Contact</a></div>
          </div>
      </div>
      <div class="separator">
        
      </div>
      <div class="empty-placeholder-main">
        
      </div>
      <div class="mou_general_search_bar">
        <div class="search_for_mous">
          <div class="search-for-mou-text">
          Search for MOUs
          </div>
        </div>
        <div class="search-options">
          <div class="college_dropdown">
          <div class="select-style">
            <select>
              <option value="Select College">Select College</option>
            </select>
          </div>
          </div>
          <div class="course_dropdown">
          <div class="select-style">
            <select>
              <option value="Select Course">Select Course</option>
            </select>
          </div>
          </div>
          <div class="go_button">
            
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default WelcomeContainer