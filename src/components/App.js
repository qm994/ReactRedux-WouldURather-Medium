import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUserData, handleInitialPollData } from '../actions/shared';
import Log from './Log'
import Home from './Home'
import '../css/App.css'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialUserData())
    this.props.dispatch(handleInitialPollData())
  }
  render() {
    return (
      <div className="App">
        <Log />
        <Home />
      </div>
    )
  }
}

export default connect()(App);
