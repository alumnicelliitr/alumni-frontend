import React from 'react';

export default class Testimonial extends React.Component {
    render() {
      return (
          <div className="testimonial">
            <div className="testimonial-heading">
              Testimonials
            </div>
            <div className="testimonial-thumbnail">
              <img src=""/>
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
