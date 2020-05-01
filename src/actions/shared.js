import { receivePolls, savePollAnswer } from './polls';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA';

const DEFAULT_AUTHED_ID = "sarahedo";

export function handleInitialUserData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(DEFAULT_AUTHED_ID))
            })
    }   
};

// console.log('the data is', _getUsers().then((users) => {console.log(users)}));


export function handleInitialPollData() {
    return (dispatch) => {
        return _getQuestions()
            .then((polls) => {
                dispatch(receivePolls(polls))
            })
    }
};

export function handleAddAnswer(answer) {
    return (dispatch) => {
        return _saveQuestionAnswer(answer)
            .then(() => {
                dispatch(savePollAnswer(answer))
            })
    }
};