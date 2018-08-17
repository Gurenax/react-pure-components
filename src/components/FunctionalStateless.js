import React from 'react'

const FunctionalStateless = ({
  message
}) => {
  console.log('Render called from Functional Stateless')
  return (
    <div className="FunctionalStatelessComponent">
      <h1>This is a Functional Stateless Component</h1>
      <p>Will render similar to a standard Component.</p>
      <div>
        <label>The message is: { message }</label>
      </div>
    </div>
  )
}

export default FunctionalStateless
