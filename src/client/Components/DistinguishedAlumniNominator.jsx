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
              <form onSubmit={(e) => e.preventDefault()} action="http://localhost:1337/api/website/alumni_card/register" method="POST" encType="multipart/form-data">
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
              </form>
            </div>
      </div>
    )
  }
}

export default AlumniCard
