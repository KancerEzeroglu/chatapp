import {messageService} from "../services/message.service";
import {messageConstants} from "../constants/message.constants";

export function login(loginId){
    return dispatch => {
        localStorage.setItem('loginId', loginId);

        dispatch({type: messageConstants.LOGIN_SUCCESS, loginId});
    }
}

export function logout(props){
    return dispatch => {
        localStorage.removeItem('loginId');
        props.history.push('/');

        dispatch({type: messageConstants.LOGOUT_SUCCESS});
    }
}

export function getAllMessages(sender, receiver) {
    return dispatch => {
        dispatch(request());

        messageService.getAllMessages(sender, receiver)
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


export function createMessage(sender, receiver, content) {
    return dispatch => {
        dispatch(request());

        return messageService.createMessage({sender, receiver, content})
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request() {
        return {type: messageConstants.CREATE_REQUEST}
    }

    function success(data) {
        return {type: messageConstants.CREATE_SUCCESS, data}
    }

    function failure(error) {
        return {type: messageConstants.CREATE_FAILURE, error}
    }
}
