export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function addNewPoll(newPoll) {
    return {
        type: ADD_POLL,
        newPoll
    }
}

export function savePollAnswer(answer) {
    return {
        type: SAVE_ANSWER,
        answer
    }
}

// Todo: also need to redux thunk function to handle the add new poll question