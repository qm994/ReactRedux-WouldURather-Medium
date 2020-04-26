import React, { Component } from 'react';
import { connect } from "react-redux";

import HomeAnswered from './HomeAnswered';
import HomeUnAnswered from './HomeUnswered';
import { getVoters } from '../utils/helper';

class Home extends Component {
    render() {
        //console.log(this.props.pollValues);
        return (
            <div>
                <HomeAnswered userAnswered={this.props.userAnswered}/>
                <HomeUnAnswered userUnAnswered={this.props.userUnAnswered}/>
            </div>
        )
    }
};

function mapStateToProps({ polls, authedUser, users }) {
    const pollsNewProp = Object.values(polls).map((poll) => {
        const optionOneVoter = poll.optionOne.votes;
        const optionTwoVoter = poll.optionTwo.votes;
        const currentVoters = [...optionOneVoter, ...optionTwoVoter];

        return {
            ...poll,
            currentVoters,
            isAnswered: currentVoters.includes(authedUser)
        }
    });
    
    return {
        pollsNewProp,
        userAnswered: pollsNewProp.filter(ele => ele.isAnswered === true),
        userUnAnswered: pollsNewProp.filter(ele => ele.isAnswered === false)
    }
}

export default connect(mapStateToProps)(Home);
