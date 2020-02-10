import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import journalReducer from './reducers/journalReducer';
import providerNotesReducer from './reducers/providersNotesReducer';

const rootReducer = combineReducers({
    journalReducer,
    providerNotesReducer
});

export default createStore(rootReducer, applyMiddleware(promise));