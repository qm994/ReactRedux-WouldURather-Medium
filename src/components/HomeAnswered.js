import React, { Component } from 'react';

import { connect } from "react-redux";

class HomeAnswered extends Component {
    render() {
        const { userAnswered } = this.props;
        console.log(userAnswered)
        return (
            <div>
                <h3>Answered Questions</h3>
                <ul>
                    {
                        userAnswered.map((poll) => (
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

function mapStateToProps({ authedUser }, props) {
    const { userAnswered } = props;
    return {
        userAnswered,
        authedUser
    }
}

export default connect(mapStateToProps)(HomeAnswered)