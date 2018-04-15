import React from 'react';
import '../styles/testimonials.css';

export default class Testimonial extends React.Component {
    render() {
      return (
          <div className="testimonial">
            <img className="quote-icon" src="/static/images/double-quotes.svg"/>
            <h3 className="testimonial-heading">
              Testimonials
            </h3>
            <div className="testimonial-image">
              <img/>
            </div>
            <div className="testimonial-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar nibh nec nisi volutpat malesuada.
              Nullam laoreet tristique justo, vel eleifend nisi porta vel. Vestibulum interdum nisl non felis sagittis tristique.
              Ut et tortor nunc. Aenean justo urna, gravida et dolor eu, accumsan hendrerit diam. Etiam elementum aliquet tempus.
              Nam commodo dapibus metus sed interdum.
              Etiam molestie faucibus velit, in scelerisque mi congue quis. Integer sit amet neque est.
            </div>
          </div>
        )
    }
}
