import React from 'react';
import MOUCard from '../Components/mouCard.jsx';
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import '../styles/mouContainer.css';
import Loader from '../Components/loader.jsx';
import { baseUrl } from '../config.js';

export default class MOU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  componentWillMount() {
    let request = new Request(`${baseUrl}/api/website/mou/`,{
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
    let cards;
    if (this.state.isLoaded){
      cards = this.state.data.map((mou) => {
        return (<MOUCard lightHeading={mou.name} darkHeading={mou.country} content="sample content"/>);
      });
    }
    return (
      <div>
        <Navbar/>
        { !this.state.isLoaded ? (<Loader/>) : ''}
        <div className="mou">
          <div className="container">
            {cards}
          </div>
        </div>
        <LandingFooter/>
      </div>
    );
  }
}
