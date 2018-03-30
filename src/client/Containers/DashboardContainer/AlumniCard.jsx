import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createAlumniCard, checkAlumniCard } from  '../../actions/'

import './AlumniCard.css'

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
  affirmation: false,
  canRegister: true,
})

class AlumniCard extends Component {
  constructor(props) {
    super(props)
    this.state = generateState()
    this.handleAffirmation = this.handleAffirmation.bind(this)
  }

  componentWillMount() {
    checkAlumniCard((canRegister, message) => {
      this.setState({
        canRegister,
      })
    }) 
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

  handleSubmit = (e) => {
    e.preventDefault()
    const error = {}
    if(!this.state.affirmation) {
        error.affirmation = 'Affirmation requires'
        return
    }
    console.log(e);
    
    const formData = new FormData();
    for(let key in this.state.alumCard) {
      formData.append(key, this.state.alumCard[key])
    }
    console.log(this.state.alumCard);
    formData.append('user', this.props.user.enr_no)
    createAlumniCard(formData, (canRegister, data) => {
      Materialize.toast('Registered For Alumni Card', 2000)
      Materialize.toast('It will be delivered.', 2000)
      this.setState({
        canRegister: !canRegister,
      })
      console.log(this.state);
    })
  }

  handleImage = (e) => {
   const { alumCard } = this.state
   alumCard[e.target.name] = e.target.files[0]
   this.setState({
     alumCard,
   })
  }

  render() {
    return (
      <div className="container">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Apply For Alumni Card</div>
            <div className="collapsible-body">
              {this.state.canRegister ? (
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <input
                  placeholder="Present Designation"
                  className="browser-default"
                  type="text"
                  name="present_desig"
                  required
                  value={this.state.alumCard.present_desig}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Present Office Address(With PIN code)"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="office_add"
                  required
                  value={this.state.alumCard.office_add}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Present Residence Address (With PIN Code) [NOTE: This address would be printed on the card]"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="residence_add"
                  required
                  value={this.state.alumCard.residence_add}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Delivery Address (With PIN Code) [Card would be sent to this address] "
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="delivery_add"
                  required
                  value={this.state.alumCard.delivery_add}
                  onChange={this.handleChange}
                />
                <textarea
                  placeholder="Address for Future Correspondence"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="address"
                  required
                  value={this.state.alumCard.address}
                  onChange={this.handleChange}
                />
                <div>
                  <label>Photo</label>
                  <input onChange={this.handleImage} name="photo" type="file" alt="photo" required />
                </div>
                <div>
                  <label>Photo Sign</label>
                  <input onChange={this.handleImage} name="photo_sign" type="file" alt="photo_sign" required />
                </div>
                <div>
                  <label>Photo Degree</label>
                  <input onChange={this.handleImage} name="photo_degree" type="file" alt="photo_degree" required />
                </div>
                <p onClick={this.handleAffirmation} >
                  <input  checked={this.state.affirmation} type="checkbox" required />
                  <label>Affirm that the information provided here is true to the best of my knowledge and request you to issue me a IITRAA Membership Card.</label>
                </p>
                <button disabled={!this.state.affirmation} type="submit" className="submit-button">Submit</button>
              </form>
              ):(
                <div>Already registered for alumni card.</div>
              )}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, null)(AlumniCard)
