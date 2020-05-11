import { receivePolls, savePollAnswer, addNewPoll } from './polls';
import { receiveUsers, saveUserAnswer, addNewPollUser } from './users';
import { setAuthedUser } from './authedUser';
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';

// const DEFAULT_AUTHED_ID = "sarahedo";

export function handleInitialUserData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                //dispatch(setAuthedUser(DEFAULT_AUTHED_ID))
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
                dispatch(saveUserAnswer(answer))
            })
    }
};

export function handleAddNewPoll(newPoll) {
    return (dispatch) => {
        return _saveQuestion(newPoll)
            .then((newPoll) => {
                console.log(newPoll)
                dispatch(addNewPoll(newPoll))
                dispatch(addNewPollUser(newPoll))
            })
    }
}