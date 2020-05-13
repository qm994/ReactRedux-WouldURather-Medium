import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { divStyle } from '../utils/helper';
import Form from 'react-bootstrap/Form';

import { Route, Redirect } from 'react-router-dom';


export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
}
  

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/log',
          // the current route path the user is trying to access
          state: {from: props.location}
      }} 
      />
    )} />
  );

class Log extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(null))
    };

    onChange = (e, authedUser) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.username.value))
    };

    render() {
        const { users, authedUser } = this.props;
        const { redirectToReferrer } = this.state;
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        //console.log(this.props)
        if(authedUser !== null) {
            this.login();
        };
        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label column sm="10">
                        <h2>Welcome to the Would U Rather App!</h2>
                        <h4>Please sign in to contiue</h4>
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        <h4>Sign in</h4>
                    </Form.Label>
                    <Form.Control 
                     as="select" 
                     size="lg"
                     custom 
                     onChange={(e) => this.onChange(e, this.props.authedUser)}
                     ref={ele => this.username = ele}>
                    <option disabled selected>Select User</option>
                        {
                            users.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
            </Form>
        )
    }
};

function mapStateToProps({ users, authedUser }) {
    return {
        users: Object.values(users),
        authedUser
    }
}

export default connect(mapStateToProps)(Log);