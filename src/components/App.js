import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialUserData, handleInitialPollData } from '../actions/shared';
import { fakeAuth, PrivateRoute } from './Log';
import Log from './Log';
import Home from './Home';
import PollDetail from './PollDetail';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';
import AddNewPoll  from './AddNewPoll';
import ErrorPage from './ErrorPage';
import AuthButton from './LogOut';

import '../css/App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';



class App extends Component {
  state = {
    user: this.props.authedUser
  }
  componentDidMount() {
    this.props.dispatch(handleInitialUserData())
    this.props.dispatch(handleInitialPollData())
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="container">
          <AuthButton /> 
          <Nav authedUser={authedUser} dispatch={this.props.dispatch} />
          {
            this.props.loading === true
              ? null
              : 
              <div className="App">
                <Route path="/log" exact component={Log} />
                
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute path="/questions/:id" exact component={PollDetail} />
                <PrivateRoute path="/leaderboard" component={LeaderBoard} />
                <PrivateRoute path="/add" exact component={AddNewPoll} />
                <Route path="/404" exact component={ErrorPage}/>
              </div>
          }
        </div>
      </Router>
    )
  }
};

function mapStateToProps({ polls, authedUser, dispatch }) {
  console.log(authedUser)
  return {
    authedUser,
    dispatch,
    loading: JSON.stringify(polls) === '{}'
  }
};

export default connect(mapStateToProps)(App);
