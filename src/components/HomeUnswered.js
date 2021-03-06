import React, { Component } from 'react';
import { connect } from "react-redux";
import Poll from "./Poll";

class HomeUnAnswered extends Component {
    render() {
        const { userUnAnswered, users } = this.props;
        return (
            <div className="questions">
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
    const userUnAnswered = props.userUnAnswered.sort((a,b) => b.timestamp - a.timestamp)
    return {
        users,
        userUnAnswered,
        authedUser
    }
}


export default connect(mapStateToProps)(HomeUnAnswered)