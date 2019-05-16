import {friendService} from "../services/friend.service";
import {friendConstants} from "../constants/friend.constants";

export function getAllFriends(loginId) {
    return dispatch => {
        dispatch(request());

        friendService.getAllFriends(loginId)
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: friendConstants.GETALL_FRIENDS_REQUEST}
    }

    function success(data) {

        return {type: friendConstants.GETALL_FRIENDS_SUCCESS, data}
    }

    function failure(error) {
        return {type: friendConstants.GETALL_FRIENDS_FAILURE, error}
    }
}

export function getFriendById(friendId) {
    return dispatch => {
        dispatch(request(friendId));

        friendService.getFriendById(friendId)
            .then(
                payload => dispatch(success(payload)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: friendConstants.GET_REQUEST}
    }

    function success(payload) {
        return {type: friendConstants.GET_SUCCESS, payload}
    }

    function failure(error) {
        return {type: friendConstants.GET_FAILURE, error}
    }
}