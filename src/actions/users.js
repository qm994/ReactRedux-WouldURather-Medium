export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const ADD_POLL_USER = "ADD_POLL_USER";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
};

export function saveUserAnswer(answer) {
    return {
        type: SAVE_USER_ANSWER,
        answer
    }
}

export function addNewPollUser(newPoll) {
    return {
        type: ADD_POLL_USER,
        newPoll
    }
}