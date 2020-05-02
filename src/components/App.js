import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUserData, handleInitialPollData } from '../actions/shared';

import Log from './Log';
import Home from './Home';
import PollDetail from './PollDetail';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';
import AddNewPoll  from './AddNewPoll';

import '../css/App.css';
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
          <Nav />
          {
            this.props.loading === true
              ? null
              : 
              <div className="App">
                <Route path="/" exact component={Log} />
                <Route path="/questions" exact component={Home} />
                <Route path="/questions/:id" exact component={PollDetail} />
                <Route path="/leaderBoard" exact component={LeaderBoard} />
                <Route path="/add" exact component={AddNewPoll} />
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
