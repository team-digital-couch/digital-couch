import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import journalReducer from './reducers/journalReducer';
import providerNotesReducer from './reducers/providersNotesReducer';

const rootReducer = combineReducers({
    userReducer,
    journalReducer,
    providerNotesReducer
});

export default createStore(rootReducer, applyMiddleware(promise));