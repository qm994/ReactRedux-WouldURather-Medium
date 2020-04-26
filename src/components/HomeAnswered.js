import React, { Component } from 'react';
import { connect } from "react-redux";
import Poll from './Poll';

class HomeAnswered extends Component {
    render() {
        const { userAnswered, users } = this.props;
        console.log(userAnswered)
        return (
            <div>
                <h2>Answered Questions</h2>
                <ul>
                    {
                        userAnswered.map((poll) => (
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

function mapStateToProps({ authedUser, users}, props) {
    const { userAnswered } = props;
    return {
        users,
        userAnswered,
        authedUser
    }
}

export default connect(mapStateToProps)(HomeAnswered)