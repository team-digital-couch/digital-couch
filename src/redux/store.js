import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import journalReducer from './reducers/journalReducer';
import providerNotesReducer from './reducers/providersNotesReducer';
import timelineReducer from './reducers/timelineReducer'

const rootReducer = combineReducers({
    timelineReducer,
    journalReducer,
    providerNotesReducer
});

export default createStore(rootReducer, applyMiddleware(promise));