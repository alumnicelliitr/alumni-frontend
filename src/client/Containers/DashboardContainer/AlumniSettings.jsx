import React, { Component } from 'react'

import './AlumniSettings.css'

class AlumniCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        mobile: '',
        branch: '',
        batch: '',
        officeNo: '',
        email: '',
      },
      image: '',
    }
  }

  componentDidMount() {
    $('select').material_select();
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

  render() {
    return (
      <div className="container">
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
                />
                <label>Last Name</label>
                <input
                  className="browser-default"
                  type="text"
                />
                <div className="row">
                  <div className="col s6">
                  <label>Branch</label>
                  <div className="browser-default">
                    <select>
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
                    <select>
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
                  />
                  </div>
                  </div>
                  <div className="col s6">
                  <label>Office</label>
                  <input
                    className="browser-default"
                    type="text"
                 />
                  </div>
                  </div>
                  </div>
                  <label>Email</label>
                <input
                  className="browser-default"
                  type="text"
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
