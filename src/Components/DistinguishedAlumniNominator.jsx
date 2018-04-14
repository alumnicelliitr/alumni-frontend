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

  componentDidMount() {
    $('.collapsible').collapsible()
  }

  render() {
    return (
      <div>
            <div>
              <form>
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
                  placeholder="Degree obtained from the University of Roorkee/IIT Roorkee"
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
                  placeholder="Affiliations"
                  className="browser-default"
                  type="text"
                  name="nominator_affiliation"
                  required
                  value={this.props.nominator.nominator_affiliation}
                  onChange={this.props.handleChange}
                />
                <input
                  placeholder="Year of Graduation"
                  className="browser-default"
                  type="text"
                  name="nominator_yearpass"
                  required
                  value={this.props.nominator.nominator_yearpass}
                  onChange={this.props.handleChange}
                />
                <input
                  placeholder="Year of Graduation"
                  className="browser-default"
                  type="text"
                  name="nominator_yearpass"
                  required
                  value={this.props.nominator.nominator_yearpass}
                  onChange={this.props.handleChange}
                />
              </form>
            </div>
      </div>
    )
  }
}

export default AlumniCard
