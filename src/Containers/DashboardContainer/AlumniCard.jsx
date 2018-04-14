import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
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
    // $('.collapsible').collapsible()
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

    const formData = new FormData();
    for(let key in this.state.alumCard) {
      formData.append(key, this.state.alumCard[key])
    }
    
    formData.append('user', this.props.user.enr_no)
    createAlumniCard(formData, (canRegister, data) => {
      window.Materialize.toast('It will be delivered.', 2000);
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
    // window.Materialize.toast('I am a toast!', 4000);
    return (
      <div className="container">
        {this.state.canRegister ? (
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input
            className="input-field"
            placeholder="Present Designation"
            className="browser-default"
            type="text"
            name="present_desig"
            required
            value={this.state.alumCard.present_desig}
            onChange={this.handleChange}
          />
          <textarea
            className="input-field"
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
            className="input-field"
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
            className="input-field"
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
            className="input-field"
            placeholder="Address for Future Correspondence"
            className="browser-default"
            type="text"
            rows="7"
            name="address"
            required
            value={this.state.alumCard.address}
            onChange={this.handleChange}
          />
          <div className="upload-images-container">
            <div className="image-uploader">
              <label className="photo">Photo</label>
              <div>
                <input className="photoChoose" onChange={this.handleImage} name="photo" type="file" alt="photo" required />
              </div>
            </div>
            <div className="image-uploader">
              <label>Photo Sign</label>
              <div>
                <input onChange={this.handleImage} name="photo_sign" type="file" alt="photo_sign" required />
              </div>
            </div>
            <div className="image-uploader">
              <label>Photo Degree</label>
              <div>
                <input onChange={this.handleImage} name="photo_degree" type="file" alt="photo_degree" required />
              </div>
            </div>
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
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, null)(AlumniCard)
