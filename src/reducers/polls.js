import { RECEIVE_POLLS, ADD_POLL, SAVE_ANSWER } from '../actions/polls';

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            };
        case ADD_POLL:
            return {
                ...state,
                [action.newPoll.id]: {
                    id: action.newPoll.id,
                    author: action.newPoll.author,
                    optionOne: action.newPoll.optionOne,
                    optionTwo: action.newPoll.optionTwo,
                    timestamp: action.newPoll.timestamp
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