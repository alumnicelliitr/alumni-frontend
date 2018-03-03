import React from 'react'
import { Link } from 'react-router'
import Navbar from '../Components/navbar.jsx';
import TrendingNews from '../Components/trendingNews.jsx';
import MOU from '../Components/MOU.jsx';
import VideoLanding from '../Components/VideoLanding.jsx';
import SAMP from '../Components/samp.jsx';
import AlumniCardsBanner from '../Components/alumniCardsBanner.jsx';
import NewsBanner from '../Components/newsBanner.jsx';
import SubscribeNewsletter from '../Components/subscribeNewsletter.jsx';
import LandingFooter from '../Components/landingFooter.jsx';

class WelcomeContainer extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Navbar/>
        <TrendingNews/>
        <MOU/>
        <VideoLanding/>
        <SAMP/>
        <AlumniCardsBanner/>
        <NewsBanner/>
        <SubscribeNewsletter/>
        <LandingFooter/>
      </div>
    );
  }
}

export default WelcomeContainer
