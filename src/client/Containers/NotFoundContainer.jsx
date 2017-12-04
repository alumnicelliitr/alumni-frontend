import React from 'react'
import { Link } from 'react-router'

export default class NotFoundContainer extends React.Component {
  render() {
    return (
      <div style={{ padding: '0px 12px' }}>
        <p>Not Found. </p>
        <p>You are probably lost. Let us guide you towards right <Link to="/">path</Link></p>
      </div>
    )
  }
}
