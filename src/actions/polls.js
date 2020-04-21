export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";


export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function addPolls(poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

// Todo: also need to redux thunk function to handle the add new poll question