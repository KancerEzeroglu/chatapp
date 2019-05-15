import {messageService} from "../services/message.service";
import {messageConstants} from "../constants/message.constants";

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
export function login(loginId){
    return dispatch => {
        dispatch({type: messageConstants.LOGIN_SUCCESS, loginId});
    }
}

export function getAllMessages() {
    return dispatch => {
        dispatch(request());

        messageService.getAllMessages()
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: messageConstants.GETALL_REQUEST}
    }

    function success(data) {
        return {type: messageConstants.GETALL_SUCCESS, data}
    }

    function failure(error) {
        return {type: messageConstants.GETALL_FAILURE, error}
    }
}


export function createMessage(message) {
    return dispatch => {
        dispatch(request());

        return messageService.createMessage(message)
            .then(
                payload => {
                    dispatch(success(payload));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() {
        return {type: messageConstants.CREATE_REQUEST}
    }

    function success(payload) {
        return {type: messageConstants.CREATE_SUCCESS, payload}
    }

    function failure(error) {
        return {type: messageConstants.CREATE_FAILURE, error}
    }
}
