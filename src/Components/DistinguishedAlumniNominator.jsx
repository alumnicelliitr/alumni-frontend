import React, { Component } from 'react'
import createAlumniCard from  '../actions/'
import $ from 'jquery';
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

<<<<<<< 2d84293bcd52e5c5d090b1a55e47b4df56e478d8
=======
  componentDidMount() {
    // $('.collapsible').collapsible()
  }

>>>>>>> Latest alumni card form
  render() {
    return (
      <div>
        <div>
        <input
            placeholder="Name"
            className="browser-default"
            type="text"
            name="nominator_name"
            required
            value={this.props.nominator.nominator_name}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Email"
            className="browser-default"
            type="text"
            name="nominator_email"
            required
            value={this.props.nominator.nominator_email}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Contact No.(with Country Code)"
            className="browser-default"
            type="text"
            name="nominator_contact"
            required
            value={this.props.nominator.nominator_contact}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Designation and Affiliation"
            className="browser-default"
            type="text"
            name="nominator_designation"
            required
            value={this.props.nominator.nominator_designation}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Address"
            className="browser-default"
            type="text"
            name="nominator_address"
            required
            value={this.props.nominator.nominator_address}
            onChange={this.props.handleChange}
          />
          <input
            placeholder="Your current or past associations with the University of Roorkee/IIT Roorkee, if any:"
            className="browser-default"
            type="text"
            name="nominator_association"
            required
            value={this.props.nominator.nominator_affiliation}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default AlumniCard
