import axios from 'axios';

//initial state

const initialState = {
    user_id: null,
    journals: [],
    time: '',
    content: ''
}

//constants

const GET_JOURNAL = "GET_JOURNAL";
const GET_JOURNALS = "GET_JOURNALS";
const ADD_JOURNAL = "ADD_JOURNAL";
const EDIT_JOURNAL = "EDIT_JOURNAL";
const DELETE_JOURNAL = "DELETE_JOURNAL";

//functions

export const getJournals = () => {
    return{
        type: GET_JOURNAL,
        payload: axios.get('/api/journal')
    }
};

export const getJournal = (id) => {
    return{
        type: GET_JOURNALS,
        payload: axios.get(`/api/journal${id}`)
    }
}

export const addJournal = (journal) => {
    return{
        type: ADD_JOURNAL,
        payload: axios.post('/api/journal', journal)
        //journal will be an object that contains user_id, time, & content
    }
};

export const editJournal = (id, journal) => {
    return{
        type: EDIT_JOURNAL,
        payload: axios.put(`/api/journal/${id}`, journal)
    }
};

export const deleteJournal = (id) => {
    return{
        type: DELETE_JOURNAL,
        payload: axios.delete(`/api/journal/${id}`)
    }
};

//reducers

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_JOURNAL}_FULFILLED`:
            return{
                ...state,
                time: payload.data.time,
                content: payload.data.content
            }
        case `${GET_JOURNAL}_REJECTED`:
            return{
                ...state
            }
        case `${GET_JOURNALS}_FULFILLED`:
            return{
                ...state,
                journals: payload.data
            }
        case ` ${GET_JOURNALS}_REJECTED`:
            return{
                ...state
            }
        case `${ADD_JOURNAL}_FULFILLED`:
            return{
                ...state
            }
        case `${ADD_JOURNAL}_REJECTED`:
            return{
                ...state
            }
        case `${EDIT_JOURNAL}_FULFILLED`:
            return{
                ...state
            }
        case `${EDIT_JOURNAL}_REJECTED`:
            return{
                ...state
            }
        case `${DELETE_JOURNAL}_FULFILLED`:
            return{
                ...state
            }
        case `${DELETE_JOURNAL}_REJECTED`:
            return{
                ...state
            }
        default: return state
    }
}