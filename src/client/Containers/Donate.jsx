import React from 'react';
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import ToggleRow from '../Components/toggleRow.jsx';
import { baseUrl } from '../config.js';
import '../styles/donate.css';
import Loader from '../Components/loader.jsx';

export default class Donate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded:false,
      data: {},
    }
  }
  componentWillMount(){
    let request = new Request(`${baseUrl}/api/website/donation_schemes/`,{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        isLoaded: true,
        data: res,
      });
    });
  }
  render() {
    let rows
    if (this.state.isLoaded){
      rows = this.state.data.map((row,index) => {
        return (
          <ToggleRow {...row}/>
        );
      });
    }
    return (
      <div>
        { !this.state.isLoaded ? (<Loader/>) : ''}
        <Navbar/>
        <div className="donate-container">
          {rows}
        </div>
        <LandingFooter/>
      </div>
    );
  }
}
