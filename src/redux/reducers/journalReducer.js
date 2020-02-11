import axios from 'axios';

//initial state

initialState = {
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

export const getJournal = () => {
    return{
        type: GET_JOURNAL,
        payload: axios.get('/api/journal')
    }
};

export const getJournals = (id) => {
    return{
        type: GET_JOURNALS,
        payload: axios.get(`/api/journal${id}`)
    }
}

export const addJournal = () => {
    return{
        type: ADD_JOURNAL,
        payload: axios.post('/api/journal')
    }
};

export const editJournal = (id) => {
    return{
        type: EDIT_JOURNAL,
        payload: axios.put(`/api/journal/${id}`)
    }
};

export const deleteJournal = (id) => {
    return{
        type: DELETE_JOURNAL,
        payload: axios.delete(`/api/journal/${id}`)
    }
};

//reducers

export const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case `${GET_JOURNAL}_FULFILLED`:
            return{
                ...state,
                time: payload.data.time,
                content: payload.data.content
            }
        case `${GET_JOURNALS}_FULFILLED`:
            return{
                ...state,
                journals: payload.data
            }
        case `${ADD_JOURNAL}_FULFILLED`:
            return{
                ...state
            }
        case `${EDIT_JOURNAL}_FULFILLED`:
            return{
                ...state
            }
        case `${DELETE_JOURNAL}_FULFILLED`:
            return{
                ...state
            }
        default: return state
    }
}