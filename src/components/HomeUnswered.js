import React, { Component } from 'react';
import { connect } from "react-redux";
import Poll from "./Poll";

class HomeUnAnswered extends Component {
    render() {
        const { userUnAnswered, users } = this.props;
        return (
            <div>
                <h2>Unanswered Questions</h2>
                <ul>
                    {
                        userUnAnswered.map(poll => (
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

function mapStateToProps({authedUser, users}, props) {
    const { userUnAnswered } = props;
    return {
        users,
        userUnAnswered,
        authedUser
    }
}


export default connect(mapStateToProps)(HomeUnAnswered)