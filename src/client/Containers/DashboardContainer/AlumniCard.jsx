import React, { Component } from 'react'

import './AlumniCard.css'

class AlumniCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      affirmation: false,
    }
    this.handleAffirmation = this.handleAffirmation.bind(this)
  }

  componentDidMount() {
    $('.collapsible').collapsible()
  }

  handleAffirmation() {
    console.log(this.state);
    
    this.setState({
      affirmation: !this.state.affirmation,
    })
  }

  render() {
    return (
      <div className="container">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Apply For Alumni Card</div>
            <div className="collapsible-body">
              <form onSubmit={(e) => e.preventDefault()} action="http://localhost:1337/api/website/alumni_card/register" method="POST" encType="multipart/form-data">
                <input
                  placeholder="Present Designation"
                  className="browser-default"
                  type="text"
                  name="office_add"
                  
                />
                <textarea
                  placeholder="Present Office Address(With PIN code)"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="office_add"
                  required
                />
                <textarea
                  placeholder="Present Residence Address (With PIN Code) [NOTE: This address would be printed on the card]"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="residence_add"
                  required
                />
                <textarea
                  placeholder="Delivery Address (With PIN Code) [Card would be sent to this address] "
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="office_add"
                  required
                />
                <textarea
                  placeholder="Address for Future Correspondence"
                  className="browser-default"
                  type="text"
                  rows="7"
                  name="address"
                  required
                />
                <div>
                  <label>Photo</label>
                  <input name="photo" type="file" alt="photo" required />
                </div>
                <div>
                  <label>Photo</label>
                  <input name="photo_sign" type="file" alt="photo_sign" required />
                </div>
                <div>
                  <label>Photo</label>
                  <input name="photo_degree" type="file" alt="photo_degree" required />
                </div>
                <p onClick={this.handleAffirmation} >
                  <input  checked={this.state.affirmation} type="checkbox" required />
                  <label>Affirm that the information provided here is true to the best of my knowledge and request you to issue me a IITRAA Membership Card.</label>
                </p>
                <button disabled={!this.state.affirmation} type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default AlumniCard
