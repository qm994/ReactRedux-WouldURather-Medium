import { RECEIVE_POLLS, ADD_POLL, SAVE_ANSWER } from '../actions/polls';

export default function polls(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            };
        case SAVE_ANSWER:

            const { authedUser, qid, answer } = action.answer;

            console.log({
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            })
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