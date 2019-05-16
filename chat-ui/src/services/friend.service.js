export const friendService = {
    getAllFriends,
    getFriendById
};

function getAllFriends(loginId) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`/api/friend.php?loginId=${loginId}`, requestOptions).then(handleResponse);
}

function getFriendById(friendId) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`/api/user.php?loginId=${friendId}`, requestOptions).then(handleResponse);
}

export function handleResponse(response) {
    if (response.ok !== true) {
        if (response.status === 401) {

        }
        return Promise.reject(response.statusText);
    }

    // The response of a fetch() request is a Stream object, which means that when we call the json() method,
    // a Promise is returned since the reading of the stream will happen asynchronously.

    return response.json();
}
