import React, { Component } from 'react'
import Nominee from '../Components/DistinguishedAlumniNominee'
import Nominator from '../Components/DistinguishedAlumniNominator'
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import '../styles/distinguished.css'

import { registerDistinguishedAlumniCard } from '../actions/'

const getNominator = () => ({
  nominator_address
:
"",
nominator_association
:
"",
nominator_contact
:
"",
nominator_designation
:
"",
nominator_email
:
"",
nominator_name
:
"",
nominator_yearpass
:
""
})

const getNominee = () => ({
delivery_add
:
"",
nominee_address
:
"",
nominee_awards
:
"",
nominee_category
:
"",
nominee_contact
:
"",
nominee_degree
:
"",
nominee_designation
:
"",
nominee_email
:
"",
nominee_linkedin
:
"",
nominee_name
:
"",
nominee_description
: '',
nominee_photo
: '',
nominee_quals
: 
"",
nominee_resume
: '',
nominee_webpage
:
"",
nominee_yearpass
:
"",
})

class DistinguishedAlumniContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        random: '',
        nominee: getNominee(),
        nominator: getNominator(),
    }
  }

  handleNominee = (e) => {
    const { nominee } = this.state
    nominee[e.target.name] = e.target.value
    this.setState({
      nominee,
    })
  }

  handleNominator = (e) => {
    const { nominator } = this.state
    nominator[e.target.name] = e.target.value
    this.setState({
      nominator,
    })
  }

  handleImage = (e) => {
    const { nominee } = this.state
    nominee[e.target.name] = e.target.files[0]
    this.setState({
      nominee,
    })
   }

   handleAffirmation = () => {
    this.setState({
      affirmation: !this.state.affirmation,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const error = {}
    if(!this.state.affirmation) {
        error.affirmation = 'Affirmation required'
        return
    }
    
    const formData = new FormData();
    for(let key in this.state.nominee) {
      formData.append(key, this.state.nominee[key])
    }

    for(let key in this.state.nominator) {
      formData.append(key, this.state.nominator[key])
    }

    registerDistinguishedAlumniCard({
      formData
    }, (canRegister, data) => {
      window.Materialize.toast('Registered For Alumni Card', 2000)
      window.Materialize.toast('It will be delivered.', 2000)
      this.setState({
        canRegister: !canRegister,
      })
    })
  }

  render() {    
    return (
      <div>
        <Navbar />
      <div className="container">
        <div className="distinguishedContainer">
      <h3 className="light-heading">Distinguished<br/><span className="dark-subheading"> Alumni Awards</span></h3>
      <hr />
        <h5>Details of Nominee</h5>
        <hr /> 
        <Nominee
          nominee={this.state.nominee}
          handleChange={this.handleNominee}
          handleImage={this.handleImage}
        />
        <br />
        <hr />
        <h5>Details of Nominator</h5>
        <hr />
        <Nominator
          nominator={this.state.nominator}
          handleChange={this.handleNominator}
        />
        <p onClick={this.handleAffirmation} >
          <input  checked={this.state.affirmation} type="checkbox" required />
          <label> I affirm that the information provided here is true to the best of my knowledge and belief.</label>
        </p>
        <button onClick={this.handleSubmit} disabled={!this.state.affirmation} type="submit" className="submit-button">Submit</button>
        </div>
      </div>
        <br />
      <hr />
      <LandingFooter />
      </div>
    )
  }
}

export default DistinguishedAlumniContainer
