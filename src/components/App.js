import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUserData, handleInitialPollData } from '../actions/shared';
import Log from './Log'
import Home from './Home'
import '../css/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUserData())
    this.props.dispatch(handleInitialPollData())
  }
  render() {
    return (
      <Router>
        <div className="container">
          {
            this.props.loading === true
              ? null
              : <div className="App">
                <Route path="/" exact component={Log} />
                <Route path="/questions" component={Home} />
              </div>
          }
        </div>
      </Router>
    )
  }
};

function mapStateToProps({ polls }) {
  return {
    loading: JSON.stringify(polls) === '{}'
  }
};

export default connect(mapStateToProps)(App);
