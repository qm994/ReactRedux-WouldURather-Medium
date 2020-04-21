import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInitialUserData, handleInitialPollData } from '../actions/shared';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialUserData())
    this.props.dispatch(handleInitialPollData())
  }
  render() {
    return (
      <div>App</div>
    )
  }
}

export default connect()(App);
