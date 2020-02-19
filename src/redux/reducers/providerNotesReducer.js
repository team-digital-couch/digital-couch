import axios from "axios";
import {toast} from 'react-toastify';

//initial state

const initialState = {
    providerNotes: []
}

//constants

const GET_PROVIDER_NOTES = "GET_PROVIDER_NOTES";
const ADD_PROVIDER_NOTES = "ADD_PROVIDER_NOTES";
const EDIT_PROVIDER_NOTES = "EDIT_PROVIDER_NOTES";
const DELETE_PROVIDER_NOTES = "DELETE_PROVIDER_NOTES";

//functions

export const getProviderNotes = (clientId) => {
    console.log('hit', clientId)
    return{
        type: GET_PROVIDER_NOTES,
        payload: axios.get(`/api/notes?clientId=${clientId}`)
    }
};

export const addProviderNotes = () => {
    return{
        type: ADD_PROVIDER_NOTES,
        payload: axios.post('/api/notes')
    }
};

export const editProviderNotes = (id) => {
    return{
        type: EDIT_PROVIDER_NOTES,
        payload: axios.put(`/api/notes/${id}`)
    }
};

export const deleteProviderNotes = (id) => {
    return{
        type: DELETE_PROVIDER_NOTES,
        payload: axios.delete(`/api/notes/${id}`)
    }
};

//reducers

export default function reducer(state=initialState, action){
    const {type, payload} = action;
    console.log('reducer hit', action)
    switch(type){
        case `${GET_PROVIDER_NOTES}_FULFILLED`:

            return{
                ...state,
                providerNotes: payload.data
            }
        case `${GET_PROVIDER_NOTES}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${ADD_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state,
                providerNotes: payload.data
            }
        case `${ADD_PROVIDER_NOTES}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${EDIT_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state,
                providerNotes: payload.data
            }
        case `${EDIT_PROVIDER_NOTES}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${DELETE_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state,
                providerNotes: payload.data
            }
        case `${DELETE_PROVIDER_NOTES}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        default: return state
    }
}