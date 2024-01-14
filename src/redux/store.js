import {
    combineReducers,
    compose,
    legacy_createStore,
} from 'redux';

import reducer from './reducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function configureStore() {
    return legacy_createStore(
        combineReducers({
            reducer,
        }),
        compose(ReactReduxDevTools)
    );
}