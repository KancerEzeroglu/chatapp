import { authHeader } from '../helpers';
import {handleResponse} from "../helpers/service.utils";

export const productService = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    _deleteProduct
};

function createProduct(product) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch('/api/products/', requestOptions).then(handleResponse);
}

function updateProduct(product) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch('/api/products/', requestOptions).then(handleResponse);
}

function getProductById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/api/products/' + id, requestOptions).then(handleResponse);
}

function getAllProducts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/products` , requestOptions).then(handleResponse);
}

function _deleteProduct(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/api/products/' + id, requestOptions).then(handleResponse);
}
