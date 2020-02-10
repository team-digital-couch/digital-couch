import axios from 'axios'

const initialState = {
    timelines: [],
    events: [],
    timelineLoading: false
}

const GET_TIMELINES = 'GET_TIMELINES'
const GET_EVENTS = 'GET_EVENTS'

export const getTimelines = (clientId = undefined) => {
    if(clientId) {
        return {
            type: GET_TIMELINES,
            payload: axios.get(`/api/timelines?clientId=${clientId}`)
        }
    } else {
        return {
            type: GET_TIMELINES,
            payload: axios.get('/api/timelines')
        }
    }
}

export const getEvents = () => {
    return {
        type: GET_EVENTS,
        payload: axios.get('/api/timeline/events')
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
        case `${GET_EVENTS}_PENDING`:
            return {
                ...state,
                timelineLoading: true
            }
        case `${GET_EVENTS}_FULFILLED`:
            return {
                ...state,
                events: payload.data,
                timelineLoading: false
            }
        default: return state
    }
}