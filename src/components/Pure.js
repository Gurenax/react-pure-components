import React, { PureComponent } from 'react'

class Pure extends PureComponent {
  render() {
    console.log('Render called from Pure')
    const { message } = this.props
    return (
      <div className="PureComponent">
        <h1>This is a Pure Component</h1>
        <p>Will render on load and but only when the state is mutated.</p>
        <div>
          <label>The message is: { message }</label>
        </div>
      </div>
    )
  }
}

export default Pure
