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
    this.handleAffirmation = this.handleAffirmation.bind(this)
  }

  componentDidMount() {
    $('.collapsible').collapsible()
  }

  handleAffirmation() {
    this.setState({
      affirmation: !this.state.affirmation,
    })
  }

  handleChange = (e) => {
    const { alumCard } = this.state
    alumCard[e.target.name] = e.target.value
    this.setState({
      alumCard,
    })
  }

  handleSubmit = () => {
    const error = {}
    if(!this.state.affirmation) {
        error.affirmation = 'Affirmation requires'
        return
    }
    // createAlumniCard(data)
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
                  name="name"
                  required
                  value={this.state.user.name}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Email"
                  className="browser-default"
                  type="text"
                  name="email"
                  required
                  value={this.state.user.email}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Contact No.(with Country Code)"
                  className="browser-default"
                  type="text"
                  name="contact"
                  required
                  value={this.state.user.contact}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Degree obtained from the University of Roorkee/IIT Roorkee"
                  className="browser-default"
                  type="text"
                  name="contact"
                  required
                  value={this.state.user.contact}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Year of Graduation:"
                  className="browser-default"
                  type="text"
                  name="contact"
                  required
                  value={this.state.user.contact}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Other Educational Qualifications, if any:"
                  className="browser-default"
                  type="text"
                  name="contact"
                  required
                  value={this.state.user.contact}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Address:"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="office_add"
                  required
                  value={this.state.user.office_add}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Designation and Affiliation:"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="residence_add"
                  required
                  value={this.state.user.residence_add}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Delivery Address (With PIN Code) [Card would be sent to this address] "
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="delivery_add"
                  required
                  value={this.state.user.delivery_add}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Description of achievements in the category of nomination (Should be limited to 1000 words):"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="address"
                  required
                  value={this.state.user.address}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Personal Webpage, if available:"
                  className="browser-default"
                  type="text"
                  name="address"
                  required
                  value={this.state.user.address}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Linkedin Profile, if available:"
                  className="browser-default"
                  type="text"
                  name="address"
                  required
                  value={this.state.user.address}
                  onChange={this.handleChange}
                />
                <div>
                  <label>Recent Photograph (Preferred File Types : jpg,png):</label><br />
                  <input name="photo" type="file" alt="photo" required />
                </div>
                <div>
                  <label>Resume of the nominee (Preferred File Types : pdf,docx):</label><br />
                  <input name="photo_sign" type="file" alt="photo_sign" required />
                </div>
                <div>
                  <label>Any other document you would like to upload:</label><br />
                  <input name="photo_degree" type="file" alt="photo_degree" required />
                </div>
              </form>
            </div>
      </div>
    )
  }
}

export default AlumniCard
