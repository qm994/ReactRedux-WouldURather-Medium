import { receivePolls } from './polls';
import { _getUsers, _getQuestions } from '../utils/_DATA'

export function handleInitialUserData() {

    return(dispatch) => {
        return _getUsers()
            .then(({users}) => {
                console.log(users)
            })
    }
    
};

export function handleInitialPollData() {
    return(dispatch) => {
        return _getQuestions()
            .then(({polls}) => {
                console.log(polls)
            })
    }
}