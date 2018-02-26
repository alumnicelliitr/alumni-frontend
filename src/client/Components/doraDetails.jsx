import React from 'react';
import '../styles/doraDetails.css';

export default class DoraDetails extends React.Component {
  render() {
    return (
        <div className="container">
          <h3 className="light-heading">Dean of <br/><span className="dark-subheading">Resources & Alumni Affairs</span></h3>
          <div className="dora-name">Dr. Bhola Ram Gujjar</div>
          <div className="dora-details">
            <div className="dora-image"><img src="/static/images/sample.jpg"/></div>
            <div className="dora-content">
              <div className="dora-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem justo, pulvinar convallis faucibus non, rhoncus vitae leo. Pellentesque ut est erat. Duis id ultrices nisi. Quisque ornare lorem ex, sit amet euismod tortor mollis at. Phasellus ullamcorper nibh nec vehicula volutpat. Donec lacinia sagittis lectus, maximus malesuada metus auctor in. Donec gravida dui odio, suscipit dignissim dui rutrum accumsan. Mauris sit amet nulla non nisl porttitor sagittis. Sed vestibulum consectetur convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper libero rhoncus mi pharetra iaculis. Praesent a lacinia arcu.</div>
              <div className="dora-contact">
                <div className="phone contact-row">
                  <img src="/static/images/phone-icon.svg" />
                  <div className="dora-contact-phone">
                    +91-XXX-XXXX-XXX
                  </div>
                </div>
                <div className="email contact-row">
                  <img src="/static/images/email-icon.svg" />
                  <div className="dora-contact-email">
                    dora@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
