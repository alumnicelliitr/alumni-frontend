import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux';
import Navbar from '../Components/navbar.jsx';
import TrendingNews from '../Components/trendingNews.jsx';
import MOU from '../Components/MOU.jsx';
import VideoLanding from '../Components/VideoLanding.jsx';
import SAMP from '../Components/samp.jsx';
import AlumniCardsBanner from '../Components/alumniCardsBanner.jsx';
import NewsBanner from '../Components/newsBanner.jsx';
import SubscribeNewsletter from '../Components/subscribeNewsletter.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import { baseUrl } from '../config.js';
import Loader from '../Components/loader.jsx';
import { recieveUser, logoutUser, } from '../actions/user_actions.js'

class WelcomeContainer extends React.Component {
  componentDidMount(){
    // var url = new URL(location.href);
    // const code = url.searchParams.get("code");
    // if (code){
    //   let request = new Request(`http://127.0.0.1:1337/api/core/login/?code=${code}`,{
    //     method:'get',
    //   });
    //   fetch(request)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
    // }
  }
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

function mapStateToProps(state) {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user,
  }
}

const mapDispatchToProps = ({
  recieveUser,
  logoutUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
