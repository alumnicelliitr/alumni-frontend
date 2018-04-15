import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchUser } from '../actions/'
import CircularLoader from '../Components/CircularLoader'
class TemporaryLoginContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
				code: '',
		}
	}


	componentWillMount() {
		const { code } = this.props.location.query
		this.props.fetchUser(code)
	}

	render() {
		return (
			<div>
				<CircularLoader />
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUser: bindActionCreators(fetchUser, dispatch),
  })

export default connect(null, mapDispatchToProps)(TemporaryLoginContainer)