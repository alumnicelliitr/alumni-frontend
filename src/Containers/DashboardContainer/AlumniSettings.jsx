import React, { Component } from 'react'
import $ from 'jquery';
import './AlumniSettings.css'

class AlumniCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        mobile: '',
        branch: '',
        batch: '',
        office_no: '',
        email: '',
      },
      image: '',
    }
  }

  componentDidMount() {
    // $('select').material_select();
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({image: e.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
    }
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
      <div className="alumni-settings container">
        <div className="row">
            <div className="col s4">
              <input onChange={this.onImageChange.bind(this)} id="image" type="file" alt="Login" />
              <div className="settings-image">
                <img id="target" src={this.state.image}/>
              </div>
            </div>
            <div className="col s8">
              <form>
                <label>First Name</label>
                <input
                  className="browser-default"
                  type="text"
                  name="first_name"
                />
                <label>Last Name</label>
                <input
                  className="browser-default"
                  type="text"
                  name="last_name"
                />
                <div className="row">
                  <div className="col s6">
                  <label>Branch</label>
                  <div className="browser-default">
                    <select name="branch">
                      <option value="" disabled selected>Choose your option</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  </div>
                  <div className="col s6">
                  <label>Batch</label>
                  <div className="browser-default">
                    <select name="batch">
                      <option value="" disabled selected>Choose your option</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
                  </div>
                  <div>
                  <div className="col s6">
                  <label>Mobile</label>
                  <div className="browser-default">
                  <input
                    className="browser-default"
                    type="text"
                    name="mobile"
                  />
                  </div>
                  </div>
                  <div className="col s6">
                  <label>Office</label>
                  <input
                    className="browser-default"
                    type="text"
                    name="office"
                 />
                  </div>
                  </div>
                  </div>
                  <label>Email</label>
                <input
                  className="browser-default"
                  type="text"
                  name="email"
                />
                <button className="submit-button" >Submit</button>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

export default AlumniCard
