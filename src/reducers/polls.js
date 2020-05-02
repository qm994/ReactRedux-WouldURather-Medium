import { RECEIVE_POLLS, ADD_POLL, SAVE_ANSWER } from '../actions/polls';

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            };
        case ADD_POLL:
            const {id, author, optionOne, optionTwo, timestamp } = action.newPoll;
            return {
                ...state,
                [id]: {
                    [id]: id,
                    [author]: author,
                    [optionOne]: optionOne,
                    [optionTwo]: optionTwo,
                    [timestamp]: timestamp
                }
            };
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action.answer;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            };
        default:
            return state
    }
}