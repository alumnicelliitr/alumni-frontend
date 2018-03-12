import React from 'react';
import '../styles/subscribeNewsletter.css';

export default class SubscribeNewsletter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:'',
      valid:true,
    };
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length === 0){
      return true;
    }
    return re.test(email);
  }

  emailChange(e) {
    this.setState({
      value: e.target.value,
      valid: this.validateEmail(e.target.value),
    });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      value: '',
      valid: true,
    });
  }

  render() {
    return (
      <div className="subscribe-newsletter">
        <div className="container">
          <h3 className="light-heading">Subscribe to our Newsletter</h3>
          <h5 className="newsletter-text light-heading">
            Get updated of institue activities through The Verband
          </h5>
          <div className="news-letter-form">
            <div className={`${ !this.state.valid ? 'invalid' : ''}`}>
              <input type="email" className="browser-default" placeholder="Email" onChange={(e) => this.emailChange(e)} value={this.state.value}/>
            </div>
            <div className="subscribe-button" onClick={(e) => this.onClick(e)}>Subscribe</div>
          </div>
        </div>
      </div>
    );
  }
}
