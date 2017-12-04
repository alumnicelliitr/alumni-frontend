// @flow

import React from 'react'
import PropTypes from 'prop-types'

class Base extends React.Component {
  render() {
    return (
      <div >
          {this.props.children}
      </div>
    )
  }

}

Base.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Base
