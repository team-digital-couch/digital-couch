import axios from 'axios'
import {toast} from 'react-toastify'

const initialState = {
    timelines: [],
    events: [],
    timelineLoading: false,
    eventLoading: false,
}

const GET_TIMELINES = 'GET_TIMELINES'
const GET_EVENTS = 'GET_EVENTS'
const ADD_TIMELINE = 'ADD_TIMELINE'
const ADD_EVENT = 'ADD_EVENT'
const UPDATE_TIMELINE = 'UPDATE_TIMELINE'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_TIMELINE = 'DELETE_TIMELINE'
const DELETE_EVENT = 'DELETE_EVENT'

export const getTimelines = (clientId = undefined) => {
    if(clientId) {
        return {
            type: GET_TIMELINES,
            payload: axios.get(`/api/timelines?clientId=${clientId}`)
        }
    } else {
        return {
            type: GET_TIMELINES,
            payload: axios.get('/api/timeline')
        }
    }
}

export const getEvents = timelineId => {
    return {
        type: GET_EVENTS,
        payload: axios.get(`/api/timeline/event?timelineId=${timelineId}`)
    }
}

export const addTimeline = timeline => {
    return {
        type: ADD_TIMELINE,
        payload: axios.post('/api/timeline', timeline)
    }
}

export const addEvent = event => {
    return {
        type: ADD_EVENT,
        payload: axios.post('/api/timeline/event', event)
    }
}

export const updateTimeline = (id, timeline) => {
    return {
        type: UPDATE_TIMELINE,
        payload: axios.put(`/api/timeline/${id}`, timeline)
    }
}

export const updateEvent = (id, event) => {
    return {
        type: UPDATE_EVENT,
        payload: axios.put(`/api/timeline/event/${id}`, event)
    }
}

export const deleteTimeline = id => {
    return {
        type: DELETE_TIMELINE,
        payload: axios.delete(`/api/timeline/${id}`)
    }
}

export const deleteEvent = id => {  
    return {
        type: DELETE_EVENT,
        payload: axios.delete(`/api/timeline/event/${id}`)
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action

    switch(type) {
        case `${GET_TIMELINES}_PENDING`:
            return {
                ...state,
                timelineLoading: true
            }
        case `${GET_TIMELINES}_FULFILLED`:   
            return {
                ...state,
                timelines: payload.data,
                timelineLoading: false
            }
        case `${GET_TIMELINES}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${GET_EVENTS}_PENDING`:
            return {
                ...state,
                eventLoading: true
            }
        case `${GET_EVENTS}_FULFILLED`:
            return {
                ...state,
                events: payload.data,
                eventLoading: false
            }
        case `${GET_EVENTS}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${ADD_TIMELINE}_PENDING`:
            return {
                ...state,
                timelineLoading: true
            }
        case `${ADD_TIMELINE}_FULFILLED`:
            return {
                ...state,
                timelines: payload.data,
                timelineLoading: false
            }
        case `${ADD_TIMELINE}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${ADD_EVENT}_PENDING`:
            return {
                ...state,
                eventLoading: true
            }
        case `${ADD_EVENT}_FULFILLED`:
            return {
                ...state,
                events: payload.data,
                eventLoading: false
            }
        case `${ADD_EVENT}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${UPDATE_TIMELINE}_PENDING`:
            return {
                ...state,
                timelineLoading: true
            }
        case `${UPDATE_TIMELINE}_FULFILLED`:
            return {
                ...state,
                timelines: payload.data,
                timelineLoading: false
            }
        case `${UPDATE_TIMELINE}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${UPDATE_EVENT}_PENDING`:
            return {
                ...state,
                eventLoading: true
            }
        case `${UPDATE_EVENT}_FULFILLED`:
            return {
                ...state,
                events: payload.data,
                eventLoading:false
            }
        case `${UPDATE_EVENT}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${DELETE_TIMELINE}_PENDING`:
            return {
                ...state,
                timelineLoading: true
            }
        case `${DELETE_TIMELINE}_FULFILLED`:
            return {
                ...state,
                timelines: payload.data,
                timelineLoading: false
            }
        case `${DELETE_TIMELINE}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        case `${DELETE_EVENT}_PENDING`:
            return {
                ...state,
                eventLoading: true
            }
        case `${DELETE_EVENT}_FULFILLED`:
            return {
                ...state,
                events: payload.data,
                eventLoading: false
            }
        case `${DELETE_EVENT}_REJECTED`:
            toast.error(payload.response.data.message)
            return state
        default: return state
    }
}