import React from 'react';

import '../styles/writetoUs.css';

export default class WriteToUs extends React.Component {
  render() {
    return (
        <div className="write-to-us-container">
          <div>
            <form class="col s12">
              <div className="row">
                <label for="email"className="label-field">Email</label>
                <div className="input-field col s12 ">
                  <input id="email" type="email" className="validate form-field" />
                </div>
              </div>
              <div className="row">
                <label for="comments" className="label-field">Add your comments</label>
                <div className="input-field col s12">
                  <textarea id="comments" className="materialize-textarea form-field"></textarea>
                </div>
              </div>
              <div className="row button-container">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
          </div>
      );
  }
}
