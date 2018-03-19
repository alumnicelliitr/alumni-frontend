// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

const style = {
  container: { display: 'flex', justifyContent: 'space-between' },
}

class UserWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      isFetching: true,
    }
  }

  componentWillMount() {
      // Fetch User Details if not fetched
    // if (!this.props.member.email) {
    //   this.props.fetchMemberDetails()
    // } else {
    //   this.setState({
    //     member: this.props.member,
    //     isFetching: false,
    //   })
    // }
  }
  render() {
    if (true) {
      return (
        <div className="row">
          <div className="col s12">
            {this.props.children}
          </div>
        </div>
      )
    } else if (!this.state.isFetching) {
      return (
        <div><h1>404 YOU ARE PROBABLY LOST!</h1>
          <Link to="/">Let Us Guide you to the right place :)</Link>
        </div>)
    }
    return <div>...fetching</div>
  }
}

UserWrapper.propTypes = {
  children: PropTypes.object,
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(UserWrapper)
