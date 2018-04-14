import React from 'react';
import '../styles/landingFooter.css';

export default class LandingFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    }
  }

  componentDidMount() {
    let request = new Request('https://institute-alumni-relation-cell.herokuapp.com/api/website/events/',{
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
    const events = this.state.data.map((obj) => { return (<a className="subheading-link" href="#">{Object.keys(obj)[0]}</a>) });

    return (
      <div className="landing-footer container">
        <div className="links-list">
          <a className="heading-link" href="/">Home</a>
          <a className="heading-link" href="about/vision">About Us</a>
          <a className="heading-link" href="#">Student Affairs</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="/initiatives">Initiatives</a>
          <a className="subheading-link" href="/initiatives">SAMP</a>
          <a className="subheading-link" href="/initiatives">COR</a>
          <a className="subheading-link" href="/initiatives">Video Repository</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Blogs</a>
          <a className="subheading-link" href="/publications">Know Your Alum</a>
          <a className="subheading-link" href="/publications">Share Your Story</a>
          <a className="subheading-link" href="https://medium.com/institute-alumni-relations-cell-iit-roorkee">Medium</a>
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Events</a>
          {events}
        </div>
        <div className="links-list">
          <a className="heading-link" href="#">Contact</a>
          <a className="subheading-link" href="#">Address</a>
          <a className="subheading-link" href="#">Number</a>
          <a className="subheading-link" href="#">Email</a>
          <a className="subheading-link" href="#">Follow Us On</a>
          <div className="follow-icons">
            <a href="https://twitter.com/alumnicelliitr"><img src="/images/twitter-dark.svg" className="follow-icon"/></a>
            <a href="https://www.facebook.com/alumnicelliitr/"><img src="/images/fb-dark.svg" className="follow-icon"/></a>
            <a href="https://www.linkedin.com/company/iarciitr"><img src="/images/in-dark.svg" className="follow-icon"/></a>
            <a href="https://www.youtube.com/channel/UCodyYSNBkcFMrZbOUZ0qlBw"><img src="/images/youtube-dark.svg" className="follow-icon"/></a>
            <a href="https://medium.com/institute-alumni-relations-cell-iit-roorkee"><img src="/images/Monogram.svg" className="follow-icon"/></a>
          </div>
        </div>
      </div>
    );
  }
}
