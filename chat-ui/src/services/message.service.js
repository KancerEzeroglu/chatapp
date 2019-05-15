export const messageService = {
    getAllMessages,
    getMessageById,
    createMessage
};

function createMessage(body) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body)
    };

    return fetch('/api/send.php', requestOptions).then(handleResponse);
}

function getMessageById(id) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('/api/products/' + id, requestOptions).then(handleResponse);
}

function getAllMessages(sender, receiver) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`/api/receive.php?sender=${sender}&receiver=${receiver}` , requestOptions).then(handleResponse);
}

export function handleResponse(response) {
    if (response.ok !== true) {
        if( response.status === 401 ){

        }
        return Promise.reject(response.statusText);
    }

    // The response of a fetch() request is a Stream object, which means that when we call the json() method,
    // a Promise is returned since the reading of the stream will happen asynchronously.

    return response.json();
}
