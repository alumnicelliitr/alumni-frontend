import React, { Component } from 'react'
import createAlumniCard from  '../actions/'

import '../styles/distinguished.css'

const generateState = () => ({
  alumCard: {
    affirmation: false,
    office_add: '',
    residence_add: '',
    address: '',
    photo: '',
    photo_sign: '',
    photo_degree: '',
  },
  user: {},
})

class AlumniCard extends Component {
  constructor(props) {
    super(props)
    this.state = generateState()
  }

  render() {
    return (
      <div>
        <div>
          <form method="POST" encType="multipart/form-data">
            <input
              placeholder="Name"
              className="browser-default"
              type="text"
              name="nominee_name"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Email"
              className="browser-default"
              type="text"
              name="nominee_email"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Contact No.(with Country Code)"
              className="browser-default"
              type="text"
              name="nominee_contact"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Degree obtained from the University of Roorkee/IIT Roorkee"
              className="browser-default"
              type="text"
              name="nominee_degree"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Year of Graduation:"
              className="browser-default"
              type="text"
              name="nominee_yearpass"
              required
              onChange={this.props.handleChange}
            />
            <textarea
              placeholder="Other Educational Qualifications, if any:"
              className="browser-default"
              type="text"
              name="nominee_quals"
              required
              onChange={this.props.handleChange}
            />
            <textarea
              placeholder="Address:"
              className="browser-default"
              type="text"
              rows="7"
              name="nominee_address"
              required
              onChange={this.props.handleChange}
            />
            <textarea
              placeholder="Designation and Affiliation:"
              className="browser-default"
              type="text"
              rows="7"
              name="nominee_designation"
              required
              onChange={this.props.handleChange}
            />
            <textarea
              placeholder="Delivery Address (With PIN Code) [Card would be sent to this address] "
              className="browser-default"
              type="text"
              rows="7"
              name="delivery_add"
              required
              onChange={this.props.handleChange}
            />
            <textarea
              placeholder="Description of achievements in the category of nomination (Should be limited to 1000 words):"
              className="browser-default"
              type="text"
              rows="7"
              name="nominee_category"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Personal Webpage, if available:"
              className="browser-default"
              type="text"
              name="nominee_webpage"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Linkedin Profile, if available:"
              className="browser-default"
              type="text"
              name="nominee_linkedin"
              required
              onChange={this.props.handleChange}
            />
            <input
              placeholder="Awards"
              className="browser-default"
              type="text"
              name="nominee_awards"
              required
              onChange={this.props.handleChange}
            />
            <div>
              <label>Recent Photograph (Preferred File Types : jpg,png):</label><br />
              <input onChange={this.props.handleImage} name="nominee_photo" type="file" alt="photo" required />
            </div>
            <div>
              <label>Resume of the nominee (Preferred File Types : pdf,docx):</label><br />
              <input onChange={this.props.handleImage}  name="nominee_resume" type="file" alt="photo_sign" required />
            </div>
            <div>
              <label>Any other document you would like to upload:</label><br />
              <input onChange={this.props.handleImage} name="nominee_optional1" type="file" alt="photo_degree" required />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AlumniCard
