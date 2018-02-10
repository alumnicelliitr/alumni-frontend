import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import VisionTab from '../Components/vision.jsx';
import Dora from '../Components/dora.jsx';
import Team from '../Components/team.jsx';
import '../styles/about.css';

class Vision extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="vision">
          <div className="about-content">
            <div className="row ">
              <div className="col s12 container">
                <ul className="tabs">
                  <li className="tab col s3"><a href="#vision">Vision</a></li>
                  <li className="tab col s3"><a href="#dora">DORA</a></li>
                  <li className="tab col s3"><a href="#team">Team</a></li>
                </ul>
              </div>
              <div id="vision" className="about-containers"><VisionTab/></div>
              <div id="dora" className="about-containers"><Dora/></div>
              <div id="team" className="about-containers"><Team/></div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Vision
