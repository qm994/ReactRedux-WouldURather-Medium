import polls from './polls';
import users from './users';

import { combineReducers } from 'redux';

export default combineReducers({
    users: users,
    polls: polls
})