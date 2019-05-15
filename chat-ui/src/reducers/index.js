import {combineReducers} from 'redux';

import {account} from "./account.reducer";
import {friend} from "./friend.reducer";

const rootReducer = combineReducers({
    account,
    friend
});

export default rootReducer;