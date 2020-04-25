import React, { Component } from 'react';

import { connect } from "react-redux";

class HomeAnswered extends Component {
    render() {
        const { polls, authedUser } = this.props;
        console.log(polls[0].id)
        return (
            <div>
                Answered Questions
            </div>
        )
    }
};

function mapStateToProps({polls, authedUser}) {
    return {
        polls: Object.values(polls),
        authedUser
    }
}

export default connect(mapStateToProps)(HomeAnswered)