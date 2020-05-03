import React, { Component } from 'react';
import { connect } from "react-redux";
import Poll from './Poll';
import { Link, withRouter } from 'react-router-dom';

class HomeAnswered extends Component {
    render() {
        const { userAnswered, users } = this.props;
        console.log(userAnswered)
        return (
            <div className="questions">
                <ul>
                    {
                        userAnswered.map(poll => (
                            <li key={poll.id}>
                                <Poll poll={poll} users={users} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

function mapStateToProps({ authedUser, users }, props) {
    const userAnswered = props.userAnswered.sort((a,b) => b.timestamp - a.timestamp)
    return {
        users,
        userAnswered,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(HomeAnswered))