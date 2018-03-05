import React from 'react';

import '../styles/writetoUs.css';

export default class WriteToUs extends React.Component {
  render() {
    return (
        <div className="write-to-us-container container">
          <div>
            <form>
              <div className="form-container">
                <div className="label">Enter mail ID</div>
                <div>
                  <input type="email" name="email" className="browser-default"/>
                </div>
                <div className="label">Add comments</div>
                <div>
                  <textarea name="comments" className="browser-default"></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
  }
}
