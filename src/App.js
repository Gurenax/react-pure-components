import React, { Component } from 'react'
import './App.css'

import Standard from './components/Standard'
import Pure from './components/Pure'
import Stateless from './components/Stateless'

class App extends Component {
  state = {
    message: 'Hello'
  }
  
  /**
   * Data will remain the same
   */
  _handleWithoutMutate = () => {
    this.setState(prevState => ({
      message: prevState.message
    }))
  }

  /**
   * Data will mutate
   */
  _handleWithMutate = () => {
    this.setState(prevState => ({
      message: prevState.message + ' world'
    }))
  }

  render() {
    console.log('Render called from App')
    const { message } = this.state
    return (
      <div className="App">
        <Standard message={message} />
        <hr />
        <Stateless message={message} />
        <hr />
        <Pure message={message} />
        <hr />
        <div style={{marginTop: '50px'}}>
          <em>Open browser console to see logs</em><br/>
          <button style={{padding: '20px', margin: '5px'}} onClick={() => this._handleWithMutate()}>With Mutation</button>
          <button style={{padding: '20px', margin: '5px'}} onClick={() => this._handleWithoutMutate()}>Without Mutation</button>
        </div>
      </div>
    )
  }
}

export default App
