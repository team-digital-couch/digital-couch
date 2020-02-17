import axios from 'axios';
import {toast} from 'react-toastify'

//initial state
const initialState = {
    userId: null,
    username: '',
    isProvider: false,
    avatar: '',
    selectedClient: 0,
    info: {},
    clients: [],
    userLoading: false
}

//const strings
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_ME = 'GET_ME'
const SELECT_CLIENT = 'SELECT_CLIENT'
const CLEAR_CLIENT = 'CLEAR_CLIENT'
const GET_USER_INFO = 'GET_USER_INFO'
const GET_CLIENTS = 'GET_CLIENTS'

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

export function selectClient(id = 0){
    return {
        type: SELECT_CLIENT,
        payload: id
    }
}

export function clearClient() {
    return {
        type: CLEAR_CLIENT
    }
}

export function getUserInfo(id = 0){
    if(!id) {
        return {
            type: GET_USER_INFO,
            payload: axios.get('/api/info')
        }
    } else {
        return {
            type: GET_USER_INFO,
            payload: axios.get(`/api/info?clientId=${id}`)
        }
    }
}

export function getClients() {
    return {
        type: GET_CLIENTS,
        payload: axios.get('/api/connections')
    }
}

//reducer
export default function reducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case `${REGISTER_USER}_PENDING`:
            return {
                ...state,
                userLoading: true
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                avatar: payload.data.avatar,
                userLoading: false
            }
        case `${REGISTER_USER}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${LOGIN_USER}_PENDING`:
            return {
                ...state,
                userLoading: true
            }
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                avatar: payload.data.avatar,
                userLoading: false
            }
        case `${LOGIN_USER}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                userId: null,
                username: '',
                isProvider: false,
                avatar: ''
            }
        case `${GET_ME}_PENDING`:
            return {
                ...state,
                userLoading: true
            }
        case `${GET_ME}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.userId,
                username: payload.data.username,
                isProvider: payload.data.isProvider,
                avatar: payload.data.avatar,
                userLoading: false
            }
        case SELECT_CLIENT:
            return {
                ...state,
                selectedClient: payload
            }
        case CLEAR_CLIENT:
            return {
                ...state,
                selectClient: 0
            }
        case `${GET_USER_INFO}_FULFILLED`:
            return {
                ...state,
                info: payload.data[0]
            }
        case `${GET_USER_INFO}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${GET_CLIENTS}_FULFILLED`:
            return {
                ...state,
                clients: payload.data
            }
        default: return state;
    }
}