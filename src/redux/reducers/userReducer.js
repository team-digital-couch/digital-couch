import axios from 'axios';

//initial state
const initialState = {
    userId: null,
    username: '',
    isProvider: false,
    error: ''
}

//const strings
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

//functions
export function registerUser(user){
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', user)
    }
}

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

//reducer
export default function reducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                error: ''
            }
        case `${LOGIN_USER}_REJECTED`:    
        case `${REGISTER_USER}_REJECTED`:
            return {
                ...state,
                error: payload.response.data.message
            }
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                error: ''
            }
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                userId: null,
                username: '',
                isProvider: false
            }    
        default: return state;
    }
}