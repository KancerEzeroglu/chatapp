import {friendService} from "../services/friend.service";
import {friendConstants} from "../constants/friend.constants";

export function getAllFriends() {
    return dispatch => {
        dispatch(request());

        friendService.getAllFriends()
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

/*
export function getMessageById(productId) {
    return dispatch => {
        dispatch(request(productId));

        productService.getProductById(productId)
            .then(
                product => dispatch(success(product)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: productConstants.GET_REQUEST}
    }

    function success(product) {
        return {type: productConstants.GET_SUCCESS, product}
    }

    function failure(error) {
        return {type: productConstants.GET_FAILURE, error}
    }
}
*/