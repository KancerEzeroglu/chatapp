import {messageConstants} from "../constants/message.constants";

export function account(state = {}, action) {
    switch (action.type) {
        case messageConstants.LOGIN_SUCCESS:
           return {loginId: action.loginId}
        default:
            return state
    }
}