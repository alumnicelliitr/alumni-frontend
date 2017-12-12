import React from 'react'
import { Link } from 'react-router'

class LoginContainer extends React.Component {
  render() {
    return (
       <div class="login">
	<h1>Log in</h1>
    <form method="post">
    	<input type="text" name="Email_id" placeholder="Enter Email Id" required="required" />
        <input type="password" name="password" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Login</button>
        <p>Forgot Password <a href="#">Click Here</a></p>
    </form>
    <div class="Note"><h3 style="text-allign:center;">Note</h3>
    <ul>
    <li>Students should Login using their <i>Channeli</i> Credentials.</li>
    <li>Alums should Login using their AlumniId given to them by Institute.</li>
    

    </ul>
    </div>
</div>
  
    )
  }
}

export default LoginContainer
