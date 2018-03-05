import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import ContactUs from '../Components/contactUs.jsx';
import WriteToUs from '../Components/writetoUs.jsx';
import Tabs from '../Components/tabs.jsx';

import '../styles/contact.css';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab
    });
  }

  render() {
    const tabs = [
      {lightHeading: 'Contact',darkHeading: 'Us'},
      {lightHeading: 'Write',darkHeading: 'to Us'}
    ];

    const tabContent = [
      ( <div id="contact-us" className="about-containers"><ContactUs/></div> ),
      ( <div id="write-to-us" className="about-containers"><WriteToUs/></div> )
    ];


    return (
      <div className="contact">
        <Navbar/>
        <div className="contact-container">
          <div className="row">
            <div className="container">
              <Tabs tabs={tabs} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
            </div>
            {tabContent[this.state.activeTab]}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact
