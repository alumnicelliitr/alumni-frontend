import React from 'react';
import ToggleRow from '../Components/toggleRow.jsx';
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import { baseUrl } from '../config.js';
import Loader from '../Components/loader.jsx';

import '../styles/awards.css';

export default class Awards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded:false,
      data: {},
    }
  }
  componentWillMount(){
    let request = new Request(`${baseUrl}/api/website/awards/`,{
      method:'get',
    });
    fetch(request)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      
      this.setState({
        isLoaded: true,
        data: res,
      });
    });
  }
  render() {
    let rows;
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
        <Navbar />
        <div className="awards-container">
          {rows}
        </div>
        <LandingFooter/>
      </div>
    );
  }
}
