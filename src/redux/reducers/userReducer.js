import axios from 'axios';
import {toast} from 'react-toastify'

//initial state
const initialState = {
    userId: null,
    username: '',
    isProvider: false,
    avatar: ''
}

//const strings
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_ME = 'GET_ME'

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
        payload: axios.post('/auth/logout')
    }
}

export function getMe(){
    return {
        type: GET_ME,
        payload: axios.get('/auth/me')
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
                avatar: payload.data.avatar
            }
        case `${LOGIN_USER}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${REGISTER_USER}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                avatar: payload.data.avatar
            }
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                userId: null,
                username: '',
                isProvider: false,
                avatar: ''
            }   
        case `${GET_ME}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                avatar: payload.data.avatar
            }
        default: return state;
    }
}