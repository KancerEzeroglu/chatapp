import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(
            thunkMiddleware
        ))
);