import { RECEIVE_POLLS, ADD_POLL, SAVE_ANSWER } from '../actions/polls';

export default function polls (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POLLS:
            return {
                ...state,
                ...action.polls
            };
        case SAVE_ANSWER:
            //onst {authedUser, qid, answer} = action;
            console.log(action)
            // const { answer } = action.answer;
            // const returnData = {
            //     ...state,
            //     ...state.users,
            //     id: {
            //         ...state.users.id,
            //         answers: {
            //             ...state.users.id.answers,
            //             [action.qid]: action.answer
            //         }
            //     }
            // };
            
            // return returnData
        default :
            return state
    }
}