import axios from 'axios';

//initial state

initialState = {
    time: '',
    content: ''
}

//constants

const GET_JOURNAL = "GET_JOURNAL";
const ADD_JOURNAL = "ADD_JOURNAL";
const EDIT_JOURNAL = "EDIT_JOURNAL";
const DELETE_JOURNAL = "DELETE_JOURNAL";

//functions

export const getJournal = () => {

};

export const addJournal = () => {

};

export const editJournal = () => {

};

export const deleteJournal = () => {

};

//reducers

export const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case `${GET_JOURNAL}_FULFILLED`:
            return{
                ...state
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
    }
}