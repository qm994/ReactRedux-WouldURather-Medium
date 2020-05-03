import { RECEIVE_USERS, SAVE_USER_ANSWER, ADD_POLL_USER } from '../actions/users';

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };

        case SAVE_USER_ANSWER:
            const { authedUser, qid, answer } = action.answer;
            console.log(state)
             return {
                ...state,
                [authedUser]:{
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                  }
                }
            };
        case ADD_POLL_USER:
          const {id, author, optionOne, optionTwo, timestamp } = action.newPoll;
          console.log(action)
          return {
            ...state,
            [author]: {
              ...state[author],
              questions: [...state[author].questions, id] 
              //state[author].questions.concat([id])
            }
          }
        default :
            return state
    }
}