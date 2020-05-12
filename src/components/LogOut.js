import { withRouter } from 'react-router-dom';
import { fakeAuth } from './Log';
import React from 'react';
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class AuthButton extends React.Component {
    render() {
        const { history, authedUser } = this.props;
        return (
            fakeAuth.isAuthenticated
                ? (
                    <p>
                        <span>{`"Welcome" ${authedUser} "use the app!"`}</span>
                        <Button onClick={() => {
                            this.props.dispatch(setAuthedUser(null))
                            fakeAuth.signout(() => history.push('/log'))
                        }}>Sign out</Button>
                    </p>
                ) : (
                    <p>You are not logged in.</p>
                )
        )
    }
};

function mapStateToProps({ authedUser }) {
    console.log(authedUser)
    return {
        authedUser
    }
};

export default connect(mapStateToProps)(withRouter(AuthButton));