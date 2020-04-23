import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleInitialUserData, handleInitialPollData } from '../actions/shared';


import Log from './Log'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialUserData())
    this.props.dispatch(handleInitialPollData())
  }
  render() {
    return (
      <Log />
    )
  }
}

export default connect()(App);
