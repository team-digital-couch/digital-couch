//initial state

//constants

const GET_PROVIDER_NOTES = "GET_PROVIDER_NOTES";
const ADD_PROVIDER_NOTES = "ADD_PROVIDER_NOTES";
const EDIT_PROVIDER_NOTES = "EDIT_PROVIDER_NOTES";
const DELETE_PROVIDER_NOTES = "DELETE_PROVIDER_NOTES";

//functions

export const getProviderNotes = () => {

};

export const addProviderNotes = () => {

};

export const editProviderNotes = () => {

};

export const deleteProviderNotes = () => {

};

//reducers

export const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case `${GET_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        case `${ADD_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        case `${EDIT_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        case `${DELETE_PROVIDER_NOTES}_FULFILLED`:
            return{
                ...state
            }
        default: return state
    }
}