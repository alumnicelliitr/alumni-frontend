import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logoutUserfromAPI } from '../actions/'
import CircularLoader from '../Components/CircularLoader'
class TemporaryLogoutContainer extends Component {
	constructor(props) {
		super(props)
	}


	componentWillMount() {
		this.props.logoutUserfromAPI()
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
	logoutUserfromAPI: bindActionCreators(logoutUserfromAPI, dispatch),
  })

export default connect(null, mapDispatchToProps)(TemporaryLogoutContainer)