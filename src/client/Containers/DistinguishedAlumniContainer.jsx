import React, { Component } from 'react'
import Nominee from '../Components/DistinguishedAlumniNominee'
import Nominator from '../Components/DistinguishedAlumniNominator'
import Navbar from '../Components/navbar.jsx';
import LandingFooter from '../Components/landingFooter.jsx';
import '../styles/distinguished.css'

class DistinguishedAlumniContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        random: '',
        nominee: {},
        nominator: {},
    }
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
        />
        <br />
        <hr />
        <h5>Details of Nominator</h5>
        <hr />
        <Nominator
          nominator={this.state.nominator}
        />
        <p onClick={this.handleAffirmation} >
          <input  checked={this.state.affirmation} type="checkbox" required />
          <label> I affirm that the information provided here is true to the best of my knowledge and belief.</label>
        </p>
        <button className="submit-button">Submit</button>
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
