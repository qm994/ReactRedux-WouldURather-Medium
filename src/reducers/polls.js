import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls';

export default function polls (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        default :
            return state
    }
}