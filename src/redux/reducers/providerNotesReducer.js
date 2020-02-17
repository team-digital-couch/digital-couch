import axios from "axios";

//initial state

const initialState = {
    client_id: null,
    provider_notes: []
}

//constants

const GET_PROVIDER_NOTES = "GET_PROVIDER_NOTES";
const ADD_PROVIDER_NOTES = "ADD_PROVIDER_NOTES";
const EDIT_PROVIDER_NOTES = "EDIT_PROVIDER_NOTES";
const DELETE_PROVIDER_NOTES = "DELETE_PROVIDER_NOTES";

//functions

export const getProviderNotes = () => {
    return{
        action: GET_PROVIDER_NOTES,
        payload: axios.get('/api/notes')
    }
};

export const addProviderNotes = () => {
    return{
        action: ADD_PROVIDER_NOTES,
        payload: axios.post('/api/notes')
    }
};

export const editProviderNotes = (id) => {
    return{
        action: EDIT_PROVIDER_NOTES,
        payload: axios.put(`/api/notes/${id}`)
    }
};

export const deleteProviderNotes = (id) => {
    return{
        action: DELETE_PROVIDER_NOTES,
        payload: axios.delete(`/api/notes/${id}`)
    }
};

//reducers

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state,
                provider_notes: payload.data
            }
        case `${GET_PROVIDER_NOTES}_REJECTED`:
            return{
                ...state
            }
        case `${ADD_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        case `${ADD_PROVIDER_NOTES}_REJECTED`:
            return{
                ...state
            }
        case `${EDIT_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        case `${EDIT_PROVIDER_NOTES}_REJECTED`:
            return{
                ...state
            }
        case `${DELETE_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        case `${DELETE_PROVIDER_NOTES}_REJECTED`:
            return{
                ...state
            }
        default: return state
    }
}