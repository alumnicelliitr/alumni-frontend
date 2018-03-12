import React from 'react';

import '../styles/writetoUs.css';

export default class WriteToUs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: {
        value: '',
        valid: true
      },
      comments:'',
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
      email: {
        value: e.target.value,
        valid: this.validateEmail(e.target.value),
      },
      comments: this.state.comments
    });
  }

  commentsChange(e) {
    this.setState({
      email: this.state.email,
      comments: e.target.value
    });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      email:{
        value: '',
        valid: true,
      },
      comments:'',
    });
  }

  render() {
    return (
        <div className="write-to-us-container container">
          <div className="write-to-us-inner-container">
            <form>
              <div className="form-container">
                <div className="label">Enter mail ID</div>
                <div className={`${ !this.state.email.valid ? 'invalid' : ''}`}>
                  <input type="email" name="email" className="browser-default" value={this.state.email.value} onChange={(e) => this.emailChange(e)}/>
                </div>
                <div className="label">Add comments</div>
                <div>
                  <textarea name="comments" className="browser-default" value={this.state.comments} onChange={(e) => this.commentsChange(e)}></textarea>
                </div>
              </div>
              <div className="submit-button-container">
                <input type="submit" className="submit-button" onClick={(e) => this.onClick(e)}/>
              </div>
            </form>
          </div>
        </div>
      );
  }
}
