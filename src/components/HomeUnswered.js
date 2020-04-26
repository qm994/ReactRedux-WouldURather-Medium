import React, { Component } from 'react';

import { connect } from "react-redux";

class HomeUnAnswered extends Component {
    render() {
        const { userUnAnswered } = this.props;
        console.log(userUnAnswered)
        return (
            <div>
                <h3>Unanswered Questions</h3>
                <ul>
                    {
                        userUnAnswered.map(poll => (
                            <li key={poll.id}>
                                {poll.optionOne.text}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
};

function mapStateToProps({authedUser}, props) {
    const { userUnAnswered } = props;
    return {
        userUnAnswered,
        authedUser
    }
}


export default connect(mapStateToProps)(HomeUnAnswered)