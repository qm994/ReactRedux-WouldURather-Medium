import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInitialUserData, handleInitialPollData } from '../actions/shared'
class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>App</div>
    )
  }
}

export default App;
