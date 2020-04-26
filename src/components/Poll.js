import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component {
    render() {
        const { poll, users } = this.props;
        console.log(poll, users)
        const avatar = users[poll.author].avatarURL
        const name = users[poll.author].name;
        const question = poll.optionOne.text;
        return (
            <div>
                <div className="poll-container">
                    <h3>{name} asks question:</h3>
                    <img src={avatar} alt={name} />
                    <span>{question}</span>
                    <button>View Poll</button>
                </div>
            </div>
        )
    }
};

export default Poll;