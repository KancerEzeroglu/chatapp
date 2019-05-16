import {friendConstants} from "../constants/friend.constants";

export function friend(state = {}, action) {
    switch (action.type) {
        case friendConstants.GETALL_FRIENDS_REQUEST:
            return {
                ...state
            };
        case friendConstants.GETALL_FRIENDS_SUCCESS:
            return {
                ...state,
                items: action.data.records
            };

        case friendConstants.GETALL_FRIENDS_FAILURE:
            return {
                error: action.error
            };

        case friendConstants.GET_REQUEST:
            return {
                ...state
            };
        case friendConstants.GET_SUCCESS:
            return {
                ...state,
                item: action.payload
            };

        case friendConstants.GET_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}