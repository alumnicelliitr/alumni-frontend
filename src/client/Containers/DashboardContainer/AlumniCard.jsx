import React, { Component } from 'react'

import './AlumniCard.css'

class AlumniCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }

  componentDidMount() {
    $('.collapsible').collapsible()
  }

  render() {
    return (
      <div className="container">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Apply For Alumni Card</div>
            <div className="collapsible-body">
              <form>
                <input
                  placeholder="First Name"
                  className="browser-default"
                  type="text"
                />
                <textarea
                  placeholder="First Name"
                  className="browser-default"
                  type="text"
                  rows="7"
                />
                <textarea
                  placeholder="First Name"
                  className="browser-default"
                  type="text"
                  rows="7"
                />
                <textarea
                  placeholder="First Name"
                  className="browser-default"
                  type="text"
                  rows="7"
                />
                <textarea
                  placeholder="First Name"
                  className="browser-default"
                  type="text"
                  rows="7"
                />
                <p>
                  <input type="checkbox" id="test5" />
                  <label for="test5">Affirm that the information provided here is true to the best of my knowledge and request you to issue me a IITRAA Membership Card.</label>
                </p>
                <button className="submit-button">Submit</button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default AlumniCard
