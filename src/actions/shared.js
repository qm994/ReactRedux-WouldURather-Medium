import { receivePolls } from './polls';
import { receiveUsers } from './users';
import { _getUsers, _getQuestions } from '../utils/_DATA';


export function handleInitialUserData() {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
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
}