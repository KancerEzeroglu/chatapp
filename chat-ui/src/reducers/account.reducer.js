import {messageConstants} from "../constants/message.constants";


export function account(state = {loginId: localStorage.getItem('loginId')}, action) {
    switch (action.type) {
        case messageConstants.LOGIN_SUCCESS:
           return {loginId: action.loginId};


        case messageConstants.GETALL_REQUEST:
            return {
                ...state
            };
        case messageConstants.GETALL_SUCCESS:
            return {
                ...state,
                items: action.data.records,
                ids: action.data.records.map(record => record.id)
            };

        case messageConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case messageConstants.CREATE_REQUEST:
            return {
                ...state
            };
        case messageConstants.CREATE_SUCCESS:
            return {
                ...state
            };

        case messageConstants.CREATE_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}