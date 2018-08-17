import React, { Component } from 'react'

class Standard extends Component {
  render() {
    console.log('Render called from Standard')
    const { message } = this.props
    return (
      <div className="StandardComponent">
        <h1>This is a Standard Component</h1>
        <p>Will render on load and every time the state is set.</p>
        <div>
          <label>The message is: { message }</label>
        </div>
      </div>
    )
  }
}

export default Standard
