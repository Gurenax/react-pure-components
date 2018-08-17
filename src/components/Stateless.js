import React from 'react'

const Stateless = ({
  message
}) => {
  console.log('Render called from Stateless')
  return (
    <div className="StatelessComponent">
      <h1>This is a Stateless Component</h1>
      <p>Will render similar to a standard Component.</p>
      <div>
        <label>The message is: { message }</label>
      </div>
    </div>
  )
}

export default Stateless
