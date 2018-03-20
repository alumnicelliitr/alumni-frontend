import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchUser } from '../actions/'

class TemporaryLoginContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
				code: '',
		}
	}


	componentWillMount() {
		// check this
		const { code } = this.props.location.query
		this.props.fetchUser(code)
	}

	render() {
		return (
			<div>
				Logging you in...
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUser: bindActionCreators(fetchUser, dispatch),
  })

export default connect(null, mapDispatchToProps)(TemporaryLoginContainer)