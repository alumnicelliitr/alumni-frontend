import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Navbar from '../../Components/navbar.jsx';
// import VisionTab from '../Components/vision.jsx';
// import Dora from '../Components/dora.jsx';
// import Team from '../Components/team.jsx';
// import SocialLinks from '../Components/socialLinks.jsx';
import Tabs from '../../Components/tabs.jsx';
import LandingFooter from '../../Components/landingFooter.jsx';

// import '../styles/about.css';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      user: {},
    };
  }

  async componentWillMount() {
    const { default: AlumniCard } = await import('./AlumniCard')
    const { default: AlumniSettings } = await import('./AlumniSettings')
    this.setState({
      AlumniCard: <AlumniCard />,
      AlumniSettings: <AlumniSettings />,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user,
    })
    if(nextProps.user.isAlumni) {
      this.setState({
        AlumniCard: null,
      })
    }
  }

  tabClick(clickTab) {
    this.setState({
      activeTab: clickTab
    });
  }

  render() {
    let tabs = []
    let tabContent = []
    if(!this.state.user.isAlumni) {
      tabs = [
        {lightHeading: '',darkHeading: 'Alumni Card'},
        {lightHeading: '',darkHeading: ' Profile Settings'},
      ];
  
      tabContent = [
        ( <div id="alumniCard" className="about-containers">{this.state.AlumniCard}</div> ),
        ( <div id=" settings" className="about-containers">{this.state.AlumniSettings}</div> ),
      ];
    } else {
      tabs = [
        {lightHeading: '',darkHeading: ' Profile Settings'},
      ];
  
      tabContent = [
        ( <div id=" settings" className="about-containers">{this.state.AlumniSettings}</div> ),
      ];
    }
    return (
      <div>
        <Navbar/>
          <div className="about-content">
            <div className="row">
              <div className="container">
                <Tabs tabs={tabs} onClick={(clickTab) => this.tabClick(clickTab)} activeTab={this.state.activeTab} />
              </div>
              {tabContent[this.state.activeTab]}
            </div>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, null)(UserDashboard)

