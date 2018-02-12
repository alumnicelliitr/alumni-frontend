import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import ContactUs from '../Components/contactUs.jsx';

import '../styles/contact.css';
class Contact extends React.Component {
  render() {
    return (
  <div className="contact">
    <Navbar/>
    <div className="contact-container">
      <div className="row">
        <div className="tabs-list-container">
        <div className="col s8 container">
          <ul className="tabs tab-menu">
            <li className="tab col s6 "><a href="#contact-us" className="grey-text tab-link">Contact Us</a></li>
            <li className="tab col s6"><a href="#write-to-us" className="grey-text tab-link">Write To Us</a></li>
          </ul>
        </div>
        </div>
        <div id="contact-us" className="about-containers"><ContactUs/></div>
        <div id="write-to-us" className="about-containers">write to us</div>
      </div>
    </div>
  </div>
    )
  }
}

export default Contact
